import { useState, useEffect, useRef } from "react";

type ViewPort = { window: { width: number; height: number } } | { window: null };
const Test = () => {
    const [viewPortDims, setViewPortDims] = useState<ViewPort>({ window: null });
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [canvasDims, setCanvasDims] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const getDims = () => {
            if (canvasRef.current) {
                setViewPortDims({ window: { width: window.innerWidth, height: window.innerHeight } });
            }
        };

        window.addEventListener("resize", getDims);
        getDims();

        return () => {
            window.removeEventListener("resize", getDims);
        };
    }, []);

    useEffect(() => {
        if (viewPortDims.window) {
            let n = Math.min(viewPortDims.window.height, viewPortDims.window.width);
            setCanvasDims({ width: n, height: n });
        }
    }, [viewPortDims.window]);

    return <canvas width={canvasDims.width} height={canvasDims.height} ref={canvasRef}></canvas>;
};

export default Test;
