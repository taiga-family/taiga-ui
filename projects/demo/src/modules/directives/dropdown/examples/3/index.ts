import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {interval, map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiDropdown,
        TuiInputModule,
        FormsModule,
        TuiSwitch,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        NgIf,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected value = 'some data';

    protected showBigText$ = interval(3000).pipe(map((i) => !(i % 2)));
}
