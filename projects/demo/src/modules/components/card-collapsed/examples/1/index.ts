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
        TuiBadge,
        TuiButton,
        TuiCard,
        TuiChevron,
        TuiExpand,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiTable,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly collapsed = signal(true);
}
