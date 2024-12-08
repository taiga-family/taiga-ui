import type {InjectionToken, Provider} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiNotificationOptionsProvider} from '@taiga-ui/core/components/notification';
import {TuiTextfieldOptionsDirective} from '@taiga-ui/core/components/textfield';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TUI_SEGMENTED_OPTIONS} from '@taiga-ui/kit/components/segmented';
import {TUI_SWITCH_OPTIONS} from '@taiga-ui/kit/components/switch';
import {TUI_HEADER_OPTIONS} from '@taiga-ui/layout/components/header';

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
        tuiButtonOptionsProvider(TuiForm),
        tuiNotificationOptionsProvider(TuiForm),
        projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size]!),
        projectSize(TUI_SWITCH_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_SEGMENTED_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
    ],
    hostDirectives: [
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: [
                'tuiTextfieldSize: tuiForm',
                'tuiTextfieldAppearance',
                'tuiTextfieldCleaner',
            ],
        },
    ],
    host: {
        tuiForm: '',
        '[attr.data-size]': 'size',
    },
})
export class TuiForm {
    protected readonly nothing = tuiWithStyles(TuiFormStyles);

    @Input('tuiForm')
    public size: TuiSizeL | TuiSizeS = 'l';
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
