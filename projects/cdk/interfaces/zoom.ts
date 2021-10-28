export interface TuiZoom {
    readonly clientX: number;
    readonly clientY: number;
    readonly delta: number;
    readonly event: WheelEvent | TouchEvent;
}

export interface TuiZoomOptions {
    readonly touchSensitivity: number;
    readonly wheelSensitivity: number;
}
