import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-theme-android',
    template: '',
    styleUrls: ['./theme-android.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiThemeAndroidComponent extends AbstractTuiThemeSwitcher {}
