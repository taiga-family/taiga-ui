import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    type InjectionToken,
    input,
    type Provider,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TUI_CHECKBOX_OPTIONS} from '@taiga-ui/core/components/checkbox';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {TUI_RADIO_OPTIONS} from '@taiga-ui/core/components/radio';
import {TuiTextfieldOptionsDirective} from '@taiga-ui/core/components/textfield';
import {TUI_BLOCK_OPTIONS} from '@taiga-ui/kit/components/block';
import {TUI_SEGMENTED_OPTIONS} from '@taiga-ui/kit/components/segmented';
import {TUI_SWITCH_OPTIONS} from '@taiga-ui/kit/components/switch';
import {TUI_HEADER_OPTIONS} from '@taiga-ui/layout/components/header';

import {TUI_FORM_OPTIONS, type TuiFormOptions} from './form.options';

const HEADER_SIZE = {s: 'body-l', m: 'h6', l: 'h5'} as const;

@Component({
    template: '',
    styleUrl: './form.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-form'},
})
class Styles {}

@Directive({
    selector: '[tuiForm]',
    providers: [
        projectSize(TUI_BUTTON_OPTIONS, (size) => size),
        projectSize(TUI_BLOCK_OPTIONS, (size) => size),
        projectSize(TUI_NOTIFICATION_OPTIONS, (size) => size),
        projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size || 'l']),
        projectSize(TUI_SWITCH_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_RADIO_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_CHECKBOX_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_SEGMENTED_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
    ],
    hostDirectives: [
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: [
                'tuiTextfieldAppearance: textfields',
                'tuiTextfieldCleaner: cleaner',
                'tuiTextfieldSize: tuiForm',
            ],
        },
    ],
    host: {
        tuiForm: '',
        '[attr.data-size]': 'size() || options.size || "l"',
    },
})
export class TuiForm {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly options = inject(TUI_FORM_OPTIONS);

    public readonly size = input(this.options.size, {alias: 'tuiForm'});
}

function projectSize(
    provide: InjectionToken<any>,
    project: TuiHandler<TuiFormOptions['size'], string>,
): Provider {
    return {
        provide,
        useFactory: () => ({
            ...inject(provide, {skipSelf: true}),
            size: project(inject(TuiForm).size() || inject(TUI_FORM_OPTIONS).size || 'l'),
        }),
    };
}
