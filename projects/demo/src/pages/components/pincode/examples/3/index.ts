import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
import {from, map, type Observable, of, shareReplay, switchMap} from 'rxjs';

const CORRECT = '1234';

// Fast loading example — response < 500ms, no pending state shown
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

    protected reset(): void {
        this.mode.set(null);
        this.control.setValue('');
    }

    private verify(value: string): Observable<TuiPincodeMode | null> {
        return from(
            new Promise<boolean>((resolve) =>
                setTimeout(() => resolve(value === CORRECT), FAST_LATENCY),
            ),
        ).pipe(
            shareReplay(1),
            map((ok) => (ok ? 'success' : 'invalid')),
        );
    }
}
