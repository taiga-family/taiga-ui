import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    type InjectionToken,
    input,
    type Provider,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TUI_SEGMENTED_OPTIONS} from '@taiga-ui/kit/components/segmented';
import {TUI_SWITCH_OPTIONS} from '@taiga-ui/kit/components/switch';
import {TUI_HEADER_OPTIONS} from '@taiga-ui/layout/components/header';

import {TUI_FORM_OPTIONS, type TuiFormOptions} from './form.options';

const HEADER_SIZE = {
    s: 'xxxs',
    m: 'xs',
    l: 's',
} as const;

@Component({
    template: '',
    styleUrls: ['./form.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-form'},
})
class Styles {}

@Directive({
    selector: '[tuiForm]',
    providers: [
        provideStyles(Styles),
        projectSize(TUI_BUTTON_OPTIONS, (size) => size),
        projectSize(TUI_NOTIFICATION_OPTIONS, (size) => size),
        projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size]),
        projectSize(TUI_SWITCH_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_SEGMENTED_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        {
            provide: TUI_TEXTFIELD_OPTIONS,
            useFactory: () => ({
                ...inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true}),
                size: signal(inject(TuiForm).tuiForm() || inject(TUI_FORM_OPTIONS).size),
            }),
        },
    ],
    hostDirectives: [
        TuiWithStyles,
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: ['tuiTextfieldAppearance', 'tuiTextfieldCleaner'],
        },
    ],
    host: {
        tuiForm: '',
        '[attr.data-size]': 'tuiForm() || options.size',
    },
})
export class TuiForm {
    protected readonly options = inject(TUI_FORM_OPTIONS);

    public readonly tuiForm = input<TuiFormOptions['size'] | ''>(this.options.size);
}

function projectSize(
    provide: InjectionToken<any>,
    project: TuiHandler<TuiFormOptions['size'], string>,
): Provider {
    return {
        provide,
        useFactory: () => ({
            ...inject(provide, {skipSelf: true}),
            size: project(inject(TuiForm).tuiForm() || inject(TUI_FORM_OPTIONS).size),
        }),
    };
}
