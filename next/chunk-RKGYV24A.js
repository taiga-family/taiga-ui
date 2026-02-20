import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInputMonth],
    templateUrl: './index.html',
    styles: ':host {display: block; min-height: 4rem}',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: interval(1000).pipe(
                map((i) => (i % 2 ? 'NOW!!!' : 'Enter this!')),
                startWith('Required field!'),
            ),
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl<TuiMonth | null>(
        null,
        Validators.required,
    );
}
`;export{t as default};
