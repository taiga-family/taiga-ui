import {isEdgeOlderThan} from '@taiga-ui/cdk';

/**
 * TODO: remove "any" in new TS version; https://github.com/ng-web-apis/common/pull/6
 */
export function areCssVarsSupported(cssRef: any, userAgent: string): boolean {
    return cssRef.supports('(--a: 0)') && !isEdgeOlderThan(17, userAgent);
}
