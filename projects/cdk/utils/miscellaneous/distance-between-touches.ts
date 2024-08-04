export function tuiDistanceBetweenTouches({touches}: TouchEvent): number {
    return Math.hypot(
        (touches.item(0)?.clientX || 0) - (touches.item(1)?.clientX || 0),
        (touches.item(0)?.clientY || 0) - (touches.item(1)?.clientY || 0),
    );
}
