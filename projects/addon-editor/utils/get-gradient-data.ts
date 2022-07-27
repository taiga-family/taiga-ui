/**
 * @deprecated: use {@link tuiGetGradientData} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getGradientData(gradient: string): string {
    return gradient
        .slice(0, Math.max(0, gradient.length - 1))
        .replace(`linear-gradient(`, ``);
}

export const tuiGetGradientData = getGradientData;
