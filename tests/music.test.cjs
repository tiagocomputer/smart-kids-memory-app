const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
function setup() {
  const scope = vm.createContext({window:{}});
  vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/music.js'),'utf8'),scope);
  let time = 0, id = 0, selected = 'auto', audible = true, loudness = 0.5;
  const queue = new Map(), oscillators = [], nodes = [], played = [];
  const param = () => ({value:0, events:[], setValueAtTime(v,t){this.value=v;this.events.push([v,t]);},
    linearRampToValueAtTime(v,t){this.events.push([v,t]);}, exponentialRampToValueAtTime(v,t){this.events.push([v,t]);},
    cancelScheduledValues(){}, setTargetAtTime(v,t){this.value=v;this.events.push([v,t]);} });
  const node = () => {const n={gain:param(),frequency:param(),Q:param(),delayTime:param(),disconnected:false,
    connect(){return this;},disconnect(){this.disconnected=true;}};nodes.push(n);return n;};
  const context = {get currentTime(){return time;},state:'running',destination:{},
    createGain:node,createDelay:node,createBiquadFilter:node,
    createOscillator(){const n=node();n.stops=[];n.start=t=>{n.startAt=t;};n.stop=t=>n.stops.push(t);oscillators.push(n);return n;}};
  let activeContext = context;
  const music=scope.window.MM_MUSIC.create({getContext:()=>activeContext,enabled:()=>audible,
    selection:()=>selected,volume:()=>loudness,onTrack:track=>played.push(track),
    schedule:(fn,ms)=>{queue.set(++id,{fn,at:time+ms/1000});return id;},cancel:i=>queue.delete(i)});
  function advance(seconds) {
    const end=time+seconds;
    while(true){const next=[...queue].filter(([,v])=>v.at<=end).sort((a,b)=>a[1].at-b[1].at)[0];
      if(!next)break;queue.delete(next[0]);time=next[1].at;next[1].fn();}
    time=end;
  }
  return {music,tracks:scope.window.MM_MUSIC.tracks,oscillators,nodes,played,context,advance,
    choose:v=>selected=v,mute:()=>audible=false,volume:v=>loudness=v,
    jump:s=>time+=s,newContext:()=>{activeContext={...context,get currentTime(){return time;}};}};
}
test('six complete 16-bar compositions contain only finite musical pitches',()=>{
  const h=setup();assert.equal(Object.keys(h.tracks).length,6);
  for(const song of Object.values(h.tracks)){
    assert.equal(song.melody.length,16);assert.ok(song.bpm>=70&&song.bpm<=110);
    assert.ok(64*60/song.bpm>35);
    for(const bar of song.melody){assert.equal(bar.length,8);assert.ok(bar.every(n=>Number.isInteger(n)&&(n===0||(n>=48&&n<=88))));}
  }
});
test('automatic playlist advances; selected song loops without being replaced',()=>{
  const h=setup();h.music.playMenu();h.advance(44);
  assert.deepEqual(h.played.filter(Boolean),['home','aventura']);h.music.stop();
  const fixed=setup();fixed.choose('calma');fixed.music.play('game');fixed.advance(105);
  assert.deepEqual(fixed.played.filter(Boolean),['calma']);
});
test('stop cancels scheduled notes and disconnects echo output',()=>{
  const h=setup();h.music.playMenu();h.advance(0.5);h.music.stop();
  const count=h.oscillators.length;
  assert.ok(h.oscillators.every(n=>n.stops.at(-1)<=0.526));
  h.advance(2);assert.equal(h.oscillators.length,count);
  assert.ok(h.nodes.filter(n=>!h.oscillators.includes(n)).some(n=>n.disconnected));
});
test('music off leaves audio creation idle; global mute stops an active score',()=>{
  const h=setup();h.choose('off');h.music.playMenu();assert.equal(h.oscillators.length,0);
  h.choose('home');h.music.playMenu();h.mute();h.advance(0.1);
  const count=h.oscillators.length;h.advance(1);assert.equal(h.oscillators.length,count);
});
test('volume changes do not restart the tune; repeated play does not double schedule',()=>{
  const h=setup();h.choose('home');h.music.playMenu();h.music.playMenu();h.volume(0.2);h.music.setVolume();
  assert.deepEqual(h.played.filter(Boolean),['home']);
  assert.ok(h.nodes.some(n=>n.gain.events.some(([v])=>v===0.2)));
});
test('late scheduler skips catch-up bursts and context recovery rebuilds output',()=>{
  const h=setup();h.music.playMenu();const count=h.oscillators.length;
  // Move the audio clock ahead while letting the next timer run at that time.
  h.context.state='suspended';h.advance(20);h.context.state='running';h.advance(0.031);
  assert.ok(h.oscillators.length-count<30);
  h.newContext();h.advance(0.05);assert.equal(h.played.filter(Boolean).length,2);
});
