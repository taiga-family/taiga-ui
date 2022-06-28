/**
 * @deprecated: use {@link tuiToRadians} instead
 * Converts angle in degrees to radians
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function toRadians(deg: number): number {
    return (deg * Math.PI) / 180;
}

export const tuiToRadians = toRadians;
