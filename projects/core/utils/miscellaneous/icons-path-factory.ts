import {TuiStringHandler} from '@taiga-ui/cdk';
import {DEFAULT_ICONS_PATH, TUI_CACHE_BUSTING_PAYLOAD} from '@taiga-ui/core/constants';

export function tuiIconsPathFactory(staticPath: string): TuiStringHandler<string> {
    const base = staticPath.endsWith(`/`) ? staticPath : `${staticPath}/`;

    return name => {
        if (name.startsWith(`tuiIcon`)) {
            return `${base}${name}.svg${TUI_CACHE_BUSTING_PAYLOAD}#${name}`;
        }

        return DEFAULT_ICONS_PATH(name);
    };
}
