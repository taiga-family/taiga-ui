import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Component({
    standalone: true,
    selector: 'tui-shrink-wrap',
    template: '<span><ng-content/></span>',
    styleUrls: ['./shrink-wrap.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiShrinkWrapV: TUI_VERSION,
    },
})
export class TuiShrinkWrapComponent {}
