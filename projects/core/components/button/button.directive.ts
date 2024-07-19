import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_BUTTON_OPTIONS} from './button.options';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/button.less";'],
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
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
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
