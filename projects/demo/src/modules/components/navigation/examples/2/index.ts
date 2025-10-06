import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes, TuiThemeColorService} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiHeader,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiNavigation} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiHeader,
        TuiLink,
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
