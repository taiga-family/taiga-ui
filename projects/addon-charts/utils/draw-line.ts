/**
 * @deprecated: use {@link drawLine} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function drawLine(point: [number, number]): string {
    return `L ${point}`;
}

export const tuiDrawLine = drawLine;
