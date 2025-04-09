import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export const [TUI_TEXTAREA_OPTIONS, tuiTextareaOptionsProvider] = tuiCreateOptions({
    min: 1,
    max: 3,
});
