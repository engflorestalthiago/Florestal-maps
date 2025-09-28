import React, { useCallback, useEffect, useRef, useState } from "react";
import { Plus, Minus, RotateCcw, Maximize2 } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
}

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const minScale = 1;
  const maxScale = 5;
  const step = 0.25;

  const reset = useCallback(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, []);

  const zoom = useCallback((delta: number, origin?: { x: number; y: number }) => {
    setScale((prev) => {
      const next = clamp(prev + delta, minScale, maxScale);
      if (!containerRef.current) return next;
      const rect = containerRef.current.getBoundingClientRect();

      if (origin && next !== prev) {
        // Zoom towards cursor: adjust translate so the point under cursor stays under cursor
        const ox = origin.x - rect.left - rect.width / 2;
        const oy = origin.y - rect.top - rect.height / 2;
        const ratio = next / prev;
        setTranslate((t) => ({ x: t.x - ox * (ratio - 1), y: t.y - oy * (ratio - 1) }));
      }
      return next;
    });
  }, []);

  // Mouse wheel zoom
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -step : step;
      zoom(delta, { x: e.clientX, y: e.clientY });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as any);
  }, [zoom]);

  // Drag to pan
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsPanning(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
  };
  const endPan = () => setIsPanning(false);

  // Double click toggle
  const onDoubleClick = (e: React.MouseEvent) => {
    if (scale === 1) {
      zoom(1, { x: e.clientX, y: e.clientY });
    } else {
      reset();
    }
  };

  return (
    <div className="absolute inset-0 bg-muted overflow-hidden select-none" ref={containerRef}
      onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseLeave={endPan} onMouseUp={endPan}
      onDoubleClick={onDoubleClick}
    >
      {/* Controls */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-card/90 border border-border rounded-lg shadow-soft p-1">
        <button
          type="button"
          aria-label="Ampliar"
          className="px-2 py-1 rounded-md hover:bg-primary/10 text-foreground"
          onClick={() => zoom(step)}
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Reduzir"
          className="px-2 py-1 rounded-md hover:bg-primary/10 text-foreground"
          onClick={() => zoom(-step)}
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          type="button"
          aria-label="Redefinir"
          className="px-2 py-1 rounded-md hover:bg-primary/10 text-foreground"
          onClick={reset}
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir em nova aba"
          className="px-2 py-1 rounded-md hover:bg-primary/10 text-foreground"
        >
          <Maximize2 className="w-4 h-4" />
        </a>
      </div>

      {/* Image wrapper */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          draggable={false}
          className="max-w-none will-change-transform"
          style={{
            transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </div>
  );
};

export default ZoomableImage;
