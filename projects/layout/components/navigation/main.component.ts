import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    selector: 'main[tuiNavigationMain]',
    template: '<ng-content />',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './main.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {tuiNavigationMain: '', 'data-tui-version': TUI_VERSION},
})
export class TuiMainComponent {}
