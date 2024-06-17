export interface TuiZoomEvent {
    readonly clientX: number;
    readonly clientY: number;
    readonly delta: number;
    readonly event: TouchEvent | WheelEvent;
}

export interface TuiZoomOptions {
    readonly wheelSensitivity: number;
}
