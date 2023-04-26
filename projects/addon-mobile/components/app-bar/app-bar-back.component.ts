import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'button[tuiAppBarBack], a[tuiAppBarBack]',
    template:
        '<tui-svg src="tuiIconChevronLeftLarge"></tui-svg><ng-content></ng-content>',
    styleUrls: ['./app-bar-back.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAppBarBackComponent {}
