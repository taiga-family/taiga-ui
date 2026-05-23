import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
import {concat, from, map, type Observable, of, switchMap, tap, timer} from 'rxjs';

const CORRECT = '1234';

const fakeApiVerify = async (pin: string): Promise<boolean> =>
    new Promise<boolean>((resolve) => setTimeout(() => resolve(pin === CORRECT), 1000));

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiLoader, TuiPincode],
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
                switchMap((value) => this.processValue(value)),
                takeUntilDestroyed(),
            )
            .subscribe((mode) => this.mode.set(mode));
    }

    private processValue(value: string | null): Observable<TuiPincodeMode | null> {
        return value?.length === 4 ? this.verify(value) : of(null);
    }

    private verify(value: string): Observable<TuiPincodeMode | null> {
        return from(fakeApiVerify(value)).pipe(
            switchMap((ok) =>
                ok
                    ? of<TuiPincodeMode>('submitting')
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
