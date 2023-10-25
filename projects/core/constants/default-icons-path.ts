import {TuiStringHandler} from '@taiga-ui/cdk';

export const TUI_DEFAULT_ICONS_PATH: TuiStringHandler<string> = name =>
    name.includes(`.svg#`) ? name : `#${name}`;

/**
 * @deprecated: use {@link TUI_DEFAULT_ICONS_PATH}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const DEFAULT_ICONS_PATH = TUI_DEFAULT_ICONS_PATH;
