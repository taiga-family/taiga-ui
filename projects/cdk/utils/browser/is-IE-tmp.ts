export function isIE(userAgent: string): boolean {
    return userAgent.includes('trident');
}
