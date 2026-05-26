import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiWithStyles} from '@taiga-ui/cdk/utils';
import {tuiAppearanceOptionsProvider} from '@taiga-ui/core/directives';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './app-bar-button.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-app-bar-button-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiAppBarButton]',
    providers: [tuiAppearanceOptionsProvider(TuiAppBarButton)],
    host: {'data-tui-version': TUI_VERSION, tuiAppBarButton: ''},
})
export class TuiAppBarButton {
    protected readonly styles = tuiWithStyles(Styles);
    public appearance = 'action-grayscale';
}
