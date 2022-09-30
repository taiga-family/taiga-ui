export function tuiDistanceBetweenTouches({touches}: TouchEvent): number {
    return Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY,
    );
}
