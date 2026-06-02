import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives';
import {tuiWithStyles} from '@taiga-ui/cdk/utils';

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
    hostDirectives: [TuiAnimated],
    host: {'data-tui-version': TUI_VERSION, tuiAppBarButton: ''},
})
export class TuiAppBarButton {
    protected readonly styles = tuiWithStyles(Styles);
}
