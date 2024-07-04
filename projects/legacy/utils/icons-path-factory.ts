import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_CACHE_BUSTING_PAYLOAD = `?v=${TUI_VERSION}` as const;

/**
 * @deprecated: drop in v5.0
 */
export const DEFAULT_ICONS_PATH: TuiStringHandler<string> = (name) =>
    name.includes('.svg#') ? name : `#${name}`;

/**
 * @deprecated: drop in v5.0
 */
export function tuiIconsPathFactory(staticPath: string): TuiStringHandler<string> {
    const base = staticPath.endsWith('/') ? staticPath : `${staticPath}/`;

    return (name) => {
        if (name.startsWith('tuiIcon')) {
            return `${base}${name}.svg${TUI_CACHE_BUSTING_PAYLOAD}#${name}`;
        }

        return DEFAULT_ICONS_PATH(name);
    };
}
