import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    type InjectionToken,
    Input,
    type Provider,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiButtonOptionsProvider,
    tuiNotificationOptionsProvider,
    type TuiSizeL,
    type TuiSizeS,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TUI_SEGMENTED_OPTIONS, TUI_SWITCH_OPTIONS} from '@taiga-ui/kit';
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
    host: {
        tuiForm: '',
        '[attr.data-size]': 'size',
    },
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
    providers: [
        tuiButtonOptionsProvider(TuiForm),
        tuiNotificationOptionsProvider(TuiForm),
        projectSize(TUI_HEADER_OPTIONS, (size) => HEADER_SIZE[size]!),
        projectSize(TUI_SWITCH_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
        projectSize(TUI_SEGMENTED_OPTIONS, (size) => (size === 'l' ? 'm' : 's')),
    ],
})
export class TuiForm {
    protected readonly nothing = tuiWithStyles(TuiFormStyles);

    @Input('tuiForm')
    size: TuiSizeS | TuiSizeL = 'l';
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
