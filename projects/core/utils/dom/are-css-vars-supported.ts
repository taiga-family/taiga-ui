import {isEdgeOlderThan} from '@taiga-ui/cdk';

/**
 * TODO: 3.0 remove this function
 */
export function areCssVarsSupported(cssRef: typeof CSS, userAgent: string): boolean {
    return cssRef.supports('(--a: 0)') && !isEdgeOlderThan(17, userAgent);
}
