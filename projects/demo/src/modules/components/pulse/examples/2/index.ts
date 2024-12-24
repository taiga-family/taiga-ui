import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {tuiProvideExperimentalHint} from '@taiga-ui/experimental';
import {TuiAvatar, TuiPulse} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPulse, TuiAvatar, NgIf, TuiHint, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [tuiProvideExperimentalHint()],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = signal(0);
}
