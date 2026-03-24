import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    selector: 'tui-shrink-wrap',
    template: '<span><ng-content/></span>',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './shrink-wrap.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiShrinkWrapComponent {}
