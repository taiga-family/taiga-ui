import {Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

// @dynamic
@Component({
    selector: `tui-theme-night`,
    template: ``,
    styleUrls: [`./theme-night.style.less`],
    encapsulation: ViewEncapsulation.None,
})
export class TuiThemeNightComponent extends AbstractTuiThemeSwitcher {}
