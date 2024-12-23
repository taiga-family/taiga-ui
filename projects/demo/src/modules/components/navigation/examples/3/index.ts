import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
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
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiNavigation,
        TuiLink,
        TuiBreadcrumbs,
        TuiButton,
        TuiHeader,
        TuiTabs,
        TuiIcon,
        TuiTitle,
        TuiFade,
        TuiBadge,
        TuiBlock,
        TuiGroup,
        TuiAppearance,
        TuiCardLarge,
        TuiRepeatTimes,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected current = 'basic';
}
