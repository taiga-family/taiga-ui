import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: '[tuiNavigationLogo]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./logo.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogoComponent {}
