import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: '[tuiNavigationLogo]',
    template: '<ng-content />',
    styleUrls: ['./logo.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiNavigationLogo: '',
        tuiNavigationLogoV: TUI_VERSION,
    },
})
export class TuiLogoComponent {}
