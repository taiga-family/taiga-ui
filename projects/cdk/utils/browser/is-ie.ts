export function tuiIsIE(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('trident');
}
