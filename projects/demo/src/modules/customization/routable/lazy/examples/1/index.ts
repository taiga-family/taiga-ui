import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiOption} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, RouterOutlet, RouterLink, TuiOption],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiLazyExample1 {}
