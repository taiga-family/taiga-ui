import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {delay, of, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items$ = of(inject<readonly string[]>('Pythons' as any)).pipe(
        startWith([]),
        delay(1000),
    );

    protected readonly form = new FormGroup({
        user: new FormControl(''),
    });
}
