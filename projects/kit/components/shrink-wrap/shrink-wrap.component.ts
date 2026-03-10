import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-shrink-wrap',
    template: '<span><ng-content/></span>',
    styleUrls: ['./shrink-wrap.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiShrinkWrapComponent {}
