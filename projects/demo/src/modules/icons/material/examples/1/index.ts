import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiIconName} from '@taiga-ui/icons-material';
import {TuiButton, TuiIcon, TuiIconPipe} from '@taiga-ui/icons-material';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider<TuiIconName>({
            icon: '@tui.material.filled.check',
        }),
    ],
})
export default class Example {}
