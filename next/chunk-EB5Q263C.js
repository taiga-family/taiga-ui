import"./chunk-LQ6M4NCU.js";var o=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_DARK_MODE,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiList, TuiNavigation} from '@taiga-ui/layout';

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
        TuiList,
        TuiNavigation,
        TuiSwitch,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    host: {'[style.--tui-theme-color]': 'color ? "purple" : null'},
})
export default class Example {
    protected readonly dark = inject(TUI_DARK_MODE);
    protected color = false;
}
`;export{o as default};
