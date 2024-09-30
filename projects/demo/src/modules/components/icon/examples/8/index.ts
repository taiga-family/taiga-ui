import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiIconPipe, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiSwitchOptionsProvider({icon: '@tui.fa.solid.check'})],
})
export default class Example {}
