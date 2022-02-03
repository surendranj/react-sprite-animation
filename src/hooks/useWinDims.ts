import { useState, useEffect, useRef } from "react";
import { ViewPort } from "../types";

type CanvasRef = {};

const useWinDims = () => {
    const [viewPortDims, setViewPortDims] = useState<ViewPort>({ window: null });
    const [canvasDims, setCanvasDims] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const getDims = () => {
            setViewPortDims({ window: { width: window.innerWidth, height: window.innerHeight } });
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
            setCanvasDims({ width: n - 150, height: n - 150 });
        }
    }, [viewPortDims.window]);

    return canvasDims;
};

export default useWinDims;
