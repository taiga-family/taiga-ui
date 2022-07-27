import {TuiStringHandler} from '@taiga-ui/cdk';
import {DEFAULT_ICONS_PATH} from '@taiga-ui/core/constants';

/**
 * @deprecated: use {@link tuiIconsPathFactory} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function iconsPathFactory(staticPath: string): TuiStringHandler<string> {
    const base =
        staticPath[staticPath.length - 1] === `/` ? staticPath : `${staticPath}/`;

    return name => {
        if (name.startsWith(`tuiIcon`)) {
            return `${base}${name}.svg#${name}`;
        }

        return DEFAULT_ICONS_PATH(name);
    };
}

export const tuiIconsPathFactory = iconsPathFactory;
