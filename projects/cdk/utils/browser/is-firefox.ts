export function tuiIsFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes(`firefox`);
}
