import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterOutlet, TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiLazyExample1 {}
