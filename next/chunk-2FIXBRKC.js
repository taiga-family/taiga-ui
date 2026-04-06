import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    type TuiSizeL,
    type TuiSizeS,
    type TuiSizeXS,
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

    protected toBadgeSize(size: string): TuiSizeS {
        switch (size) {
            case 'body-l':
            case 'body-m':
            case 'h6':
                return 's';
            default:
                return 'm';
        }
    }

    protected toButtonSize(size: string): TuiSizeL | TuiSizeXS {
        switch (size) {
            case 'h1':
                return 'l';
            case 'h2':
            case 'h3':
                return 'm';
            case 'h4':
            case 'h5':
                return 's';
            default:
                return 'xs';
        }
    }
}
`;export{i as default};
