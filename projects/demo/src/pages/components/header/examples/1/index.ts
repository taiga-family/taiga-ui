import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    type TuiSizeS,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiBadgeNotification, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body-l',
        'body-m',
        'body-s',
    ] as const;
}
