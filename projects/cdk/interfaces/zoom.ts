export interface TuiZoom {
    readonly clientX: number;
    readonly clientY: number;
    readonly delta: number;
    readonly event: WheelEvent | TouchEvent;
}

export interface TuiZoomOptions {
    readonly wheelSensitivity: number;
}
