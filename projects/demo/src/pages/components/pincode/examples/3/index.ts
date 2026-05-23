import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
import {concat, from, map, type Observable, of, switchMap, tap, timer} from 'rxjs';

const CORRECT = '1234';
const FAST_LATENCY = 300;

@Component({
    imports: [ReactiveFormsModule, TuiPincode],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mode = signal<TuiPincodeMode | null>(null);
    protected readonly control = new FormControl('');

    constructor() {
        this.control.valueChanges
            .pipe(
                switchMap((value) =>
                    value?.length === 4 ? this.verify(value) : of(null),
                ),
                takeUntilDestroyed(),
            )
            .subscribe((mode) => this.mode.set(mode));
    }

    private verify(value: string): Observable<TuiPincodeMode | null> {
        return from(
            new Promise<boolean>((resolve) =>
                setTimeout(() => resolve(value === CORRECT), FAST_LATENCY),
            ),
        ).pipe(
            switchMap((ok) =>
                ok
                    ? of<TuiPincodeMode>('success')
                    : concat(
                          of<TuiPincodeMode>('invalid'),
                          timer(1400).pipe(
                              tap(() => this.control.setValue('')),
                              map(() => null),
                          ),
                      ),
            ),
        );
    }
}
