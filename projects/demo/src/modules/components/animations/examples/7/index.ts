import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe} from '@taiga-ui/cdk';
import {TuiButton, tuiFadeIn} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiAnimationPipe, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export default class Example {
    protected isOpen = false;
}
