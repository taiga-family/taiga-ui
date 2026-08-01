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
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/button.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-button-${TUI_VERSION}`,
})
class TuiButtonStyles {}

@Directive({
    standalone: true,
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons],
    host: {
        '[attr.data-size]': 'size',
        '[attr.tuiButtonV]': "el.hasAttribute('tuiButton') ? version : null",
        '[attr.tuiIconButtonV]': "el.hasAttribute('tuiIconButton') ? version : null",
    },
})
export class TuiButton {
    private readonly options = inject(TUI_BUTTON_OPTIONS);
    protected readonly nothing = tuiWithStyles(TuiButtonStyles);
    protected readonly version = TUI_VERSION;
    protected readonly el = tuiInjectElement();

    @Input()
    public size = this.options.size;
}
