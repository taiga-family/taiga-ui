import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-theme-night',
    template: '',
    styleUrls: ['./theme-night.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiThemeNightComponent extends AbstractTuiThemeSwitcher {}
