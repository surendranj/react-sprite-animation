import { useState } from "react";
import Player from "./Player";
import Controls from "./Controls";

const SpriteAnimation = () => {
    const [playerState, setPlayerState] = useState("idle");

    const handlePlayerStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPlayerState(event.target.value);
    };

    return (
        <div>
            <Player playerState={playerState} />
            <Controls handlePlayerStateChange={handlePlayerStateChange} value={playerState} />
        </div>
    );
};

export default SpriteAnimation;
