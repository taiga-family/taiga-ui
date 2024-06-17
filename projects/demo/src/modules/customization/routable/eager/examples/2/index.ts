import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, RouterLink, RouterOutlet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiPage2ExampleComponent {}
