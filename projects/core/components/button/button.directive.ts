import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_BUTTON_OPTIONS} from './button.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/button.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-button'},
})
class Styles {}

@Directive({
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [provideStyles(Styles), tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
    hostDirectives: [TuiWithAppearance, TuiWithIcons, TuiWithIcons],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiButton {
    public readonly size = input(inject(TUI_BUTTON_OPTIONS).size);
}
