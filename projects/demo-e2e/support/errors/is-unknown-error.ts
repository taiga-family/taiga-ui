export function tuiPlaywrightIsUnknownError(err: unknown): boolean {
    return !(err as Error)?.message.includes(`Screenshot comparison failed`);
}
