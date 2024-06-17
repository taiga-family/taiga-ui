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
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiIconsDirective} from '@taiga-ui/core/directives/icons';

import {TUI_BUTTON_OPTIONS} from './button.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./button.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-button',
    },
})
class TuiButtonStyles {}

@Directive({
    standalone: true,
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
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
        '[attr.data-size]': 'size',
    },
})
export class TuiButton {
    private readonly options = inject(TUI_BUTTON_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiButtonStyles);

    @Input()
    public size = this.options.size;
}
