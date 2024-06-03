import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFadeIn, TuiLinkDirective} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFadeDirective, NgIf, TuiLinkDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export default class ExampleComponent {
    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
