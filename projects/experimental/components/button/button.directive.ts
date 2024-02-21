import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiIconsDirective,
} from '@taiga-ui/core';

import {TUI_BUTTON_OPTIONS} from './button.options';

@Component({
    template: '',
    styleUrls: ['./button.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button-styles',
    },
})
export class TuiButtonStylesComponent {}

@Directive({
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [MODE_PROVIDER, tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {
        tuiButtonNew: '',
        '[attr.data-size]': 'size',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiButtonDirective {
    private readonly options = inject(TUI_BUTTON_OPTIONS);
    protected readonly nothing = tuiWithStyles(TuiButtonStylesComponent);

    @Input()
    size = this.options.size;

    readonly mode$ = inject(TUI_MODE);
}
