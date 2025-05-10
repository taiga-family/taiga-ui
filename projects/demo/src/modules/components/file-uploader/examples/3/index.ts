import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiButtonClose} from '@taiga-ui/kit';
import {TuiCard, TuiCell, TuiHeader} from '@taiga-ui/layout';

interface DataPlatform {
    name: string;
    tuiPlatform: 'android' | 'ios' | 'web';
    size?: 'l' | 'm';
}

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiButton,
        TuiButtonClose,
        TuiCard,
        TuiCell,
        TuiFile,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms: readonly DataPlatform[] = [
        {
            name: 'iOS',
            tuiPlatform: 'ios',
        },
        {
            name: 'Android',
            tuiPlatform: 'android',
        },
        {
            name: 'Desktop Large',
            tuiPlatform: 'web',
            size: 'l',
        },
        {
            name: 'Desktop Medium',
            tuiPlatform: 'web',
            size: 'm',
        },
    ];
}
