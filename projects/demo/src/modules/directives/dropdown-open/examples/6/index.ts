import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {
    TuiAlertService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiDropdownOpen,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiDropdownMobile,
        TuiDropdownOpen,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected onAddSocialSupport(type: string): void {
        this.alerts.open(type).subscribe();
    }
}
