export function getGradientData(gradient: string): string {
    return gradient
        .slice(0, Math.max(0, gradient.length - 1))
        .replace('linear-gradient(', '');
}
