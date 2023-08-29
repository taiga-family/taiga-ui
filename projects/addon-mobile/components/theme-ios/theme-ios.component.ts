import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-theme-ios',
    template: '',
    styleUrls: ['./theme-ios.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiThemeIosComponent extends AbstractTuiThemeSwitcher {}
