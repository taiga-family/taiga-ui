export function tuiDistanceBetweenTouches({touches}: TouchEvent): number {
    return Math.hypot(
        (touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0),
        (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0),
    );
}
