export function isIE(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('trident');
}
