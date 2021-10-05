export function getGradientData(gradient: string): string {
    return gradient.substring(0, gradient.length - 1).replace('linear-gradient(', '');
}
