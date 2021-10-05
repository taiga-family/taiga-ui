export function isFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes('firefox');
}
