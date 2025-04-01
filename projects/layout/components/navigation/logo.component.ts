import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

/**
 * @deprecated moved to @taiga-ui/beaver
 */
@Component({
    standalone: true,
    selector: '[tuiNavigationLogo]',
    template: '<ng-content />',
    styleUrls: ['./logo.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogoComponent {}
