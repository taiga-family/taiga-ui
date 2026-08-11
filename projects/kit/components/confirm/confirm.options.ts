import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

// TODO: Rename to TuiConfirmOptions in v6
export interface TuiConfirmData {
    readonly content?: PolymorpheusContent;
    readonly no?: string;
    readonly yes?: string;
    readonly appearance?: string | readonly [yes: string, no: string];
}

export const [TUI_CONFIRM_OPTIONS, tuiConfirmOptionsProvider] =
    tuiCreateOptions<TuiConfirmData>({
        content: '',
        no: '',
        yes: '',
        appearance: '',
    });
