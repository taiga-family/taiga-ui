/**
 * @deprecated: use {@link tuiDistanceBetweenTouches} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function distanceBetweenTouches({touches}: TouchEvent): number {
    return Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY,
    );
}

export const tuiDistanceBetweenTouches = distanceBetweenTouches;
