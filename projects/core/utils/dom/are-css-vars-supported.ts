import {tuiIsEdgeOlderThan} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiAreCssVarsSupported} instead
 * TODO: 3.0 remove this function
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function areCssVarsSupported(cssRef: typeof CSS, userAgent: string): boolean {
    return cssRef.supports('(--a: 0)') && !tuiIsEdgeOlderThan(17, userAgent);
}

export const tuiAreCssVarsSupported = areCssVarsSupported;
