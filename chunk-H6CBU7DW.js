import"./chunk-HU6DUUP4.js";var t=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown, TuiInput} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {interval, map} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        PolymorpheusTemplate,
        TuiDropdown,
        TuiInput,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected value = 'some data';

    protected showBigText$ = interval(3000).pipe(map((i) => !(i % 2)));
}
`;export{t as default};
