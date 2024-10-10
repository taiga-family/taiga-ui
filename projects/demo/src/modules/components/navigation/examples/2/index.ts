import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes, TuiThemeColorService} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiDropdown, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAppearance,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDropdown,
        TuiFade,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly theme = inject(TuiThemeColorService);

    protected color = false;

    protected onColor(color: boolean): void {
        this.theme.color = color ? 'purple' : 'black';
    }
}
