import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiGroup,
    TuiIcon,
    TuiLink,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiBreadcrumbs, TuiFade, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiBadge,
        TuiBlock,
        TuiBreadcrumbs,
        TuiButton,
        TuiCardLarge,
        TuiFade,
        TuiGroup,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiNavigation,

        TuiTabs,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected current = 'basic';
}
