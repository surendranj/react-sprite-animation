import { PlayerControlProps } from "../types";

const Controls = (props: PlayerControlProps) => {
    return (
        <div className="absolute z-10 top-[30px] left-1/2 -translate-x-1/2 text-xl">
            <label htmlFor="animations">Choose Animation: </label>
            <select name="animations" id="animations" value={props.value} onChange={props.handlePlayerStateChange}>
                <option value="idle">Idle</option>
                <option value="jump">Jump</option>
                <option value="fall">Fall</option>
                <option value="run">Run</option>
                <option value="dizzy">Dizzy</option>
                <option value="sit">Sit</option>
                <option value="roll">Roll</option>
                <option value="bite">Bite</option>
                <option value="ko">Ko</option>
                <option value="getHit">Get Hit</option>
            </select>
        </div>
    );
};

export default Controls;
