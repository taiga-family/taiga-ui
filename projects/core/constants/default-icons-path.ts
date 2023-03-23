import type {TuiStringHandler} from '@taiga-ui/cdk';

export const DEFAULT_ICONS_PATH: TuiStringHandler<string> = name =>
    name.includes(`.svg#`) ? name : `#${name}`;
