import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {
    TuiPincode,
    type TuiPincodeAppearance,
    type TuiPincodeMode,
    TuiSegmented,
} from '@taiga-ui/kit';
import {
    concat,
    from,
    map,
    merge,
    type Observable,
    of,
    shareReplay,
    switchMap,
    takeUntil,
    tap,
    timer,
} from 'rxjs';

const CORRECT: Record<4 | 5 | 6, string> = {4: '1234', 5: '12345', 6: '123456'};

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiLoader, TuiPincode, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly correct = CORRECT;
    protected readonly latencies = [300, 1000, 2000] as const;
    protected readonly appearances: readonly TuiPincodeAppearance[] = ['numbers', 'dots'];
    protected readonly lengths = [4, 5, 6] as const;

    protected latency = 1000;
    protected appearance: TuiPincodeAppearance = 'numbers';
    protected length: 4 | 5 | 6 = 4;

    protected readonly mode = signal<TuiPincodeMode | null>(null);
    protected readonly control = new FormControl('');

    constructor() {
        this.control.valueChanges
            .pipe(
                switchMap((value) =>
                    value?.length === this.length ? this.verify(value) : of(null),
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
        const start = Date.now();
        const result$ = from(
            new Promise<boolean>((resolve) =>
                setTimeout(() => resolve(value === CORRECT[this.length]), this.latency),
            ),
        ).pipe(shareReplay(1));

        return merge(
            timer(500).pipe(
                takeUntil(result$),
                map(() => 'pending' as const),
            ),
            result$.pipe(
                switchMap((ok) => {
                    if (ok) {
                        return of<TuiPincodeMode>(
                            Date.now() - start > 700 ? 'submitting' : 'success',
                        );
                    }

                    return concat(
                        of<TuiPincodeMode>('invalid'),
                        timer(1000).pipe(map(() => 'dismissing' as const)),
                        timer(400).pipe(
                            tap(() => this.control.setValue('')),
                            map(() => null),
                        ),
                    );
                }),
            ),
        );
    }
}
