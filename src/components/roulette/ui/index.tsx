import { useEffect, useRef, useState } from "react";
import { useRouletteStore } from "../../../stores";

export const RouletteComponent = ({
  rouletteSvg,
  data,
}: {
  rouletteSvg: any;
  data: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isSpinning = useRouletteStore((state) => state.isSpinning);
  const setIsSpinning = useRouletteStore((state) => state.setIsSpinning);
  const setResult = useRouletteStore((state) => state.setResult);
  const [angle, setAngle] = useState(0);
  const drawWheel = (ctx: CanvasRenderingContext2D, angleOffset: number) => {
    const canvas = ctx.canvas;
    const size = canvas.width / 2;
    const angleStep = (2 * Math.PI) / data.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < data.length; i++) {
      ctx.beginPath();
      ctx.moveTo(size, size);
      ctx.fillStyle = data[i].style.backgroundColor;
      ctx.arc(
        size,
        size,
        size,
        i * angleStep + angleOffset,
        (i + 1) * angleStep + angleOffset,
      );
      ctx.fill();

      // Текст
      ctx.save();
      ctx.translate(size, size);
      ctx.rotate((i + 0.5) * angleStep + angleOffset);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 16px sans-serif";
      ctx.fillText(data[i].option, size - 10, 5);

      ctx.restore();
    }

    // Стрелка
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.moveTo(500, size - 10);
    ctx.lineTo(500, size + 10);
    ctx.lineTo(480, size);
    ctx.closePath();
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawWheel(ctx, angle);
  }, [angle]);

  useEffect(() => {
    if (!isSpinning) return;
    setIsSpinning(true);

    const totalRotation = Math.random() * 360 + 360 * 5;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const duration = 3000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentAngle = (totalRotation * eased * Math.PI) / 180;

      setAngle(currentAngle);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const index =
          data.length -
          Math.floor(
            ((currentAngle % (2 * Math.PI)) / (2 * Math.PI)) * data.length,
          ) -
          1;
        const result =
          data[index < 0 ? data.length - 1 : index].option.toString() || "";
        const ids =
          data[index < 0 ? data.length - 1 : index].id.toString() || "";
        const multiplier =
          data[index < 0 ? data.length - 1 : index].multiplier.toString() || 0;
        setResult({
          ids,
          res: result,
          multiplier,
        });
      }
    };

    requestAnimationFrame(animate);
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <canvas ref={canvasRef} width={500} height={500} />
        <picture className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center ">
          <img src={rouletteSvg} alt="crazyTime" width="200" />
        </picture>
      </div>
    </div>
  );
};
