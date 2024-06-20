import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: '[tuiNavigationLogo]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./logo.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogo {}
