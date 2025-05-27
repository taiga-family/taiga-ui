import type {InjectionToken, Provider} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/components/notification';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core/components/textfield';
import {TUI_SEGMENTED_OPTIONS} from '@taiga-ui/kit/components/segmented';
import {TUI_SWITCH_OPTIONS} from '@taiga-ui/kit/components/switch';
import {TUI_HEADER_OPTIONS} from '@taiga-ui/layout/components/header';

import type {TuiFormOptions} from './form.options';
import {TUI_FORM_OPTIONS} from './form.options';

const HEADER_SIZE: Record<string, string> = {
    s: 'xxxs',
    m: 'xs',
    l: 's',
};

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./form.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-form',
    },
})
class TuiFormStyles {}

@Directive({
    standalone: true,
    selector: '[tuiForm]',
    providers: [
        projectSize(TUI_BUTTON_OPTIONS, (size) => size),
        projectSize(TUI_NOTIFICATION_OPTIONS, (size) => size),
        projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size]!),
        projectSize(TUI_SWITCH_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_SEGMENTED_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        {
            provide: TUI_TEXTFIELD_OPTIONS,
            useFactory: () => ({
                ...inject(TUI_TEXTFIELD_OPTIONS, {skipSelf: true}),
                size: signal(inject(TuiForm).size),
            }),
        },
    ],
    hostDirectives: [
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: ['tuiTextfieldAppearance', 'tuiTextfieldCleaner'],
        },
    ],
    host: {
        tuiForm: '',
        '[attr.data-size]': 'size',
    },
})
export class TuiForm {
    protected readonly options = inject(TUI_FORM_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiFormStyles);

    public size: TuiFormOptions['size'] = this.options.size;

    @Input('tuiForm')
    public set tuiFormSize(size: TuiFormOptions['size'] | '') {
        this.size = size || this.options.size;
    }
}

function projectSize(
    provide: InjectionToken<any>,
    project: TuiStringHandler<string>,
): Provider {
    return {
        provide,
        useFactory: () => ({
            ...inject(provide, {skipSelf: true}),
            size: project(inject(TuiForm).size),
        }),
    };
}
