import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonModule} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButtonModule, RouterOutlet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample1 {}
