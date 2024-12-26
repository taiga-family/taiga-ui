import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {tuiProvideExperimentalHint} from '@taiga-ui/experimental';
import {TuiAvatar, TuiPulse} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, TuiAvatar, TuiButton, TuiHint, TuiPulse, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiProvideExperimentalHint()],
})
export default class Example {
    protected readonly step = signal(0);
}
