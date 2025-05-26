"use client"

import React, { useRef, useEffect } from 'react';

const MusicVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current) return;

    // Audio context and analyzer setup
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      if (!ctx) return;
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      const barWidth = (WIDTH / bufferLength) * 2.5;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const r = barHeight + (25 * (i / bufferLength));
        const g = 250 * (i / bufferLength);
        const b = 50;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    // Start drawing once audio plays
    audioRef.current.onplay = () => {
      audioCtx.resume();
      draw();
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>React Music Visualizer</h1>
      <canvas ref={canvasRef} width={800} height={300} style={{ border: '1px solid #ccc' }} />
      <div style={{ marginTop: '1rem' }}>
        <audio ref={audioRef} controls>
          {/* Replace '/sample.mp3' with your audio file path */}
          <source src="/sample.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default MusicVisualizer;
