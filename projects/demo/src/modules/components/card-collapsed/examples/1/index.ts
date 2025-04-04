import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';
import {TuiBadge, TuiChevron} from '@taiga-ui/kit';
import {TuiCard, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCard,
        TuiHeader,
        TuiLink,
        TuiTitle,
        TuiIcon,
        TuiBadge,
        TuiButton,
        TuiChevron,
        TuiExpand,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    readonly collapsed = signal(true);
}
