// Original scores for Memória Mágica. MIDI pitches, eight half-beat slots/bar.
// No remote audio, samples, account or network dependency.
(() => {
  'use strict';
  const phrase = (text) => text.split('|').map(bar => bar.trim().split(/\s+/).map(n => n === '-' ? 0 : Number(n)));
  const tracks = {
    home: { bpm: 92, voice: 'felt', arp: 'bell', swing: 0.06,
      chords: [[48,52,55,59],[45,48,52,55],[53,57,60,64],[43,47,50,57]],
      melody: phrase('72 - 76 79 - 76 74 - | 72 - 69 - 67 - - - | 69 - 72 76 - 74 72 - | 71 - 69 - 67 - - - | 64 67 72 - 76 - 74 - | 72 - 69 67 - 64 - - | 65 - 69 - 72 76 74 - | 71 - 67 - 72 - - - | 79 - 76 - 74 72 - - | 76 - 72 69 - 67 - - | 77 - 76 72 - 69 72 - | 74 - 71 - 67 - - - | 76 74 72 - 67 - 64 - | 69 - 72 - 76 - 72 - | 77 - 76 - 72 69 - - | 74 - 71 - 72 - - -') },
    aventura: { bpm: 104, voice: 'marimba', arp: 'felt', swing: 0.1,
      chords: [[50,54,57,61],[47,50,54,57],[43,47,50,54],[45,49,52,57]],
      melody: phrase('66 69 - 74 73 - 69 - | 66 - 62 66 - 69 - - | 67 71 - 74 71 - 67 - | 69 - 64 - 61 - - - | 62 - 66 69 - 74 73 - | 71 69 - 66 - 62 - - | 67 - 71 - 74 76 74 - | 73 - 69 - 74 - - - | 74 78 - 76 74 - 69 - | 71 - 74 73 - 71 - - | 74 - 71 67 - 66 67 - | 69 - 73 - 76 - - - | 78 - 76 74 - 73 69 - | 71 - 69 66 - 62 - - | 67 71 - 74 76 - 74 - | 73 - 69 - 74 - - -') },
    calma: { bpm: 76, voice: 'felt', arp: 'bell', swing: 0,
      chords: [[53,57,60,64],[48,52,55,60],[50,53,57,60],[46,50,53,57]],
      melody: phrase('69 - - 72 - - 76 - | 74 - 72 - 67 - - - | 69 - - 65 - - 62 - | 65 - 69 - 70 - - - | 72 - 69 - 65 - - - | 67 - - 64 - - 60 - | 65 - 69 - 72 - 69 - | 70 - - 65 - - - - | 76 - - 72 - - 69 - | 74 - 72 - 67 - - - | 77 - - 76 - - 72 - | 74 - 70 - 69 - - - | 72 - - 69 - - 65 - | 67 - 64 - 60 - - - | 65 - - 69 - - 72 - | 70 - 69 - 65 - - -') },
    espacial: { bpm: 84, voice: 'bell', arp: 'felt', swing: 0,
      chords: [[48,52,55,62],[52,55,59,62],[45,48,52,59],[53,57,60,64]],
      melody: phrase('79 - - 74 - - 76 - | 83 - 79 - 78 - - - | 76 - - 72 - - 71 - | 72 - 76 - 77 - - - | 74 - 79 - 76 - - - | 78 - - 74 - - 71 - | 72 - 76 - 79 - 76 - | 77 - - 76 - - 72 - | 84 - 79 - 74 - - - | 83 - - 79 - - 78 - | 81 - 79 - 76 - - - | 77 - 76 - 72 - - - | 79 - - 76 - - 74 - | 78 - 74 - 71 - - - | 76 - 72 - 71 - 72 - | 77 - - 76 - - - -') },
    heroi: { bpm: 108, voice: 'marimba', arp: 'felt', swing: 0.04,
      chords: [[43,47,50,54],[40,43,47,50],[48,52,55,59],[50,54,57,60]],
      melody: phrase('67 - 71 74 - 71 69 - | 67 - 64 - 62 - - - | 64 67 - 72 71 - 67 - | 69 - 66 - 62 - - - | 71 74 - 79 78 - 74 - | 76 - 74 71 - 67 - - | 72 - 71 - 67 64 67 - | 69 - 66 - 67 - - - | 79 - 74 71 - 69 67 - | 71 - 67 - 64 - - - | 76 - 74 72 - 71 67 - | 74 - 69 - 66 - - - | 71 - 74 - 79 78 74 - | 76 - 74 71 - 67 - - | 72 71 67 - 64 - 67 - | 69 - 66 - 67 - - -') },
    oceano: { bpm: 88, voice: 'felt', arp: 'marimba', swing: 0.12,
      chords: [[48,52,55,59],[50,53,57,60],[43,47,50,57],[48,52,55,59]],
      melody: phrase('64 - 67 71 - 72 - - | 69 - 65 - 62 65 - - | 67 - 71 74 - 72 71 - | 67 - 64 - 60 - - - | 71 72 - 76 - 74 72 - | 69 - 72 74 - 69 - - | 71 - 69 - 67 62 67 - | 64 - 60 - 67 - - - | 76 - 74 72 - 71 - - | 77 - 76 74 - 72 69 - | 74 - 71 - 69 67 - - | 72 - 67 - 64 - - - | 67 71 - 72 76 - 74 - | 72 - 69 - 65 - 62 - | 67 - 69 71 - 74 71 - | 72 - 67 - 60 - - -') },
  };
  const frequency = midi => 440 * 2 ** ((midi - 69) / 12);

  function create({ getContext, enabled, selection, volume, onTrack = () => {}, schedule = setTimeout, cancel = clearTimeout }) {
    let timer = null, session = null, mode = 'menu', cursor = 0;
    const ids = Object.keys(tracks);
    const outputLevel = () => Math.max(0, Math.min(1, Number(volume()) || 0)) * (mode === 'relaxed' ? 0.65 : mode === 'game' ? 0.8 : 1);

    function note(s, midi, at, duration, instrument, velocity) {
      if (!midi) return;
      const c = s.context;
      // Rounded attacks + mellow harmonic partials instead of square-wave beeps.
      const voices = instrument === 'bell' ? [[1,1],[2,0.2],[3,0.04]]
        : instrument === 'marimba' ? [[1,1],[2,0.13]]
        : instrument === 'pad' ? [[1,0.65],[2,0.09]]
        : instrument === 'bass' ? [[1,1]] : [[1,1],[2,0.18],[3,0.025]];
      const attack = instrument === 'pad' ? 0.18 : instrument === 'bass' ? 0.025 : 0.012;
      for (const [partial, level] of voices) {
        const osc = c.createOscillator(), gain = c.createGain();
        osc.type = 'sine'; osc.frequency.value = frequency(midi) * partial;
        gain.gain.setValueAtTime(0, at);
        gain.gain.linearRampToValueAtTime(velocity * level, at + attack);
        gain.gain.exponentialRampToValueAtTime(0.0001, at + Math.max(attack + 0.05, duration));
        osc.connect(gain).connect(s.input);
        s.voices.add(osc);
        osc.onended = () => { s.voices.delete(osc); osc.disconnect(); gain.disconnect(); };
        osc.start(at); osc.stop(at + duration + 0.08);
      }
    }

    function step(s) {
      const song = tracks[s.track], beat = 60 / song.bpm * (mode === 'relaxed' ? 1.08 : 1);
      const bar = Math.floor(s.step / 8), slot = s.step % 8;
      const chord = song.chords[bar % song.chords.length];
      const at = s.next + (slot % 2 ? song.swing * beat : 0);
      const melody = song.melody[bar][slot];
      if (melody) {
        let length = 1;
        while (slot + length < 8 && !song.melody[bar][slot + length]) length++;
        note(s, melody, at, Math.min(length * beat * 0.48 + 0.16, 1.7), song.voice, 0.11);
      }
      if (slot === 0) {
        chord.slice(1).forEach(pitch => note(s, pitch, at, beat * 3.5, 'pad', 0.024));
        note(s, chord[0] - 12, at, beat * 1.6, 'bass', 0.105);
      }
      if (slot === 4) note(s, chord[0] - 5, at, beat * 1.3, 'bass', 0.075);
      // Light answering accompaniment, with breathing space at phrase endings.
      if ([1,3,6].includes(slot) && !(bar % 4 === 3 && slot === 6)) {
        const pitch = chord[(slot + bar) % chord.length] + 12;
        note(s, pitch, at, beat * 0.75, song.arp, 0.026);
      }
      s.step++;
      s.next += beat / 2;
    }

    function dispose(s, immediate = false) {
      if (!s) return;
      const now = s.context.currentTime, fade = immediate ? 0.015 : 0.18;
      s.output.gain.cancelScheduledValues(now);
      s.output.gain.setValueAtTime(s.output.gain.value, now);
      s.output.gain.linearRampToValueAtTime(0, now + fade);
      for (const osc of s.voices) { try { osc.stop(now + fade + 0.01); } catch {} }
      // Includes delay feedback, so paused music cannot leave an echo playing.
      schedule(() => s.nodes.forEach(node => { try { node.disconnect(); } catch {} }), (fade + 0.04) * 1000);
    }

    function begin(track) {
      const context = getContext();
      if (!context) return null;
      const input = context.createGain(), filter = context.createBiquadFilter();
      const output = context.createGain(), delay = context.createDelay(1), echo = context.createGain();
      filter.type = 'lowpass'; filter.frequency.value = 3400; filter.Q.value = 0.3;
      delay.delayTime.value = 60 / tracks[track].bpm * 0.75;
      echo.gain.value = 0.16;
      input.connect(filter); filter.connect(output); filter.connect(delay);
      delay.connect(echo); echo.connect(output); echo.connect(delay);
      output.connect(context.destination);
      output.gain.setValueAtTime(0, context.currentTime);
      output.gain.linearRampToValueAtTime(outputLevel(), context.currentTime + 0.3);
      const s = { track, context, input, output, nodes: [input,filter,output,delay,echo], voices: new Set(), step: 0, next: context.currentTime + 0.06 };
      onTrack(track);
      return s;
    }

    function pump() {
      timer = null;
      if (!session || !enabled() || selection() === 'off') { stop(); return; }
      const c = getContext();
      if (!c) { stop(); return; }
      if (c !== session.context) { const track = session.track; dispose(session, true); session = begin(track); }
      if (c.state === 'running') {
        // Never catch up missed seconds with a burst of overlapping notes.
        if (session.next < c.currentTime - 0.2) session.next = c.currentTime + 0.04;
        while (session.next < c.currentTime + 0.16) {
          if (session.step === 128) {
            if (selection() === 'auto') {
              const previous = session;
              cursor = (cursor + 1) % ids.length;
              session = begin(ids[cursor]); dispose(previous);
            } else session.step = 0;
          }
          step(session);
        }
      }
      timer = schedule(pump, 30);
    }

    function play(nextMode = 'menu') {
      const chosen = selection();
      if (!enabled() || chosen === 'off') { stop(); return; }
      const track = Object.hasOwn(tracks, chosen) ? chosen : ids[cursor];
      if (session && session.track === track && mode === nextMode && timer !== null) return;
      stop(); mode = nextMode;
      session = begin(track);
      if (session) pump();
    }
    function stop() {
      if (timer !== null) cancel(timer);
      timer = null;
      const previous = session; session = null;
      dispose(previous, true);
      onTrack(null);
    }
    function setVolume() {
      if (!session) return;
      const now = session.context.currentTime;
      session.output.gain.cancelScheduledValues(now);
      session.output.gain.setTargetAtTime(outputLevel(), now, 0.05);
    }
    return { play, playMenu: () => play('menu'), stop, setVolume };
  }
  window.MM_MUSIC = { tracks, create };
})();
