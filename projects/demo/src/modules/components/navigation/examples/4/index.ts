import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiDropdownService, TuiTitle} from '@taiga-ui/core';
import {TuiChevron, TuiFade} from '@taiga-ui/kit';
import {
    TuiCardLarge,
    TuiHeader,
    tuiLayoutIconsProvider,
    TuiNavigation,
} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiFade,
        TuiHeader,
        TuiNavigation,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLayoutIconsProvider({grid: '@tui.align-justify'}),
        // Ignore portal related code, it is only here to position drawer inside the example block
        TuiDropdownService,
        tuiAsPortal(TuiDropdownService),
    ],
})
export default class Example extends TuiPortals {
    protected open = true;
}
