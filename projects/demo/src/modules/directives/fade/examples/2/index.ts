import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFadeIn, TuiLink} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFade, NgIf, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export default class Example {
    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
