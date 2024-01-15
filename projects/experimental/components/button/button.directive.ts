import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiBrightness,
    TuiIconsDirective,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button.options';

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
    @Input()
    size = this.options.size;

    constructor(
        @Inject(TUI_BUTTON_OPTIONS) private readonly options: TuiButtonOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonStylesComponent);
    }
}
