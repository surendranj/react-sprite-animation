export type FrameLoc = {
    x: number;
    y: number;
}[];

export type Frames = {
    loc: FrameLoc;
};

export type SpriteAnimations = {
    [key: string]: Frames;
};

export type PlayerControlProps = {
    value: string;
    handlePlayerStateChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export type PlayerProps = { playerState: string };

export type ViewPort = { window: { width: number; height: number } } | { window: null };
