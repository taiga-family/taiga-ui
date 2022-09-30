import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: `tui-theme-ios`,
    styleUrls: [`./theme-ios.style.less`],
    template: ``,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiThemeIosComponent extends AbstractTuiThemeSwitcher {}
