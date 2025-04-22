import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiButtonClose, TuiProgress, TuiSegmented} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

interface DataPlatform {
    name: string;
    tuiPlatform: 'android' | 'ios' | 'web';
    size?: 'm' | 's';
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiFile,
        TuiIcon,
        TuiPlatform,
        TuiProgress,
        TuiSegmented,
        TuiSwipeActions,
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
            name: 'iOS/Android',
            tuiPlatform: 'ios',
        },
        {
            name: 'Desktop M',
            tuiPlatform: 'web',
            size: 'm',
        },
        {
            name: 'Desktop S',
            tuiPlatform: 'web',
            size: 's',
        },
    ];

    protected selected = this.platforms[0]!;
}
