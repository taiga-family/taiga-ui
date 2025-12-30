import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiOrientation, type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiGroupOptions {
    readonly size: TuiSizeL;
    readonly collapsed: boolean;
    readonly rounded: boolean;
    readonly orientation: TuiOrientation;
}

export const TUI_GROUP_DEFAULT_OPTIONS: TuiGroupOptions = {
    size: 'l',
    collapsed: false,
    rounded: true,
    orientation: 'horizontal',
};

export const [TUI_GROUP_OPTIONS, tuiGroupOptionsProvider] = tuiCreateOptions(
    TUI_GROUP_DEFAULT_OPTIONS,
);
