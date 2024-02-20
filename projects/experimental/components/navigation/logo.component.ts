import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: '[tuiNavigationLogo]',
    template: `
        <ng-content select="tui-icon:not([tuiBadge]),img"></ng-content>
        <span><ng-content></ng-content></span>
        <ng-content
            select="[tuiBadge],[tuiChip],tui-badge,tui-chip,input,button"
        ></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLogoComponent {}
