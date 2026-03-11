import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'tui-shrink-wrap',
    template: '<span><ng-content/></span>',
    styleUrl: './shrink-wrap.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiShrinkWrapComponent {}
