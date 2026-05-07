import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiPincode, type TuiPincodeMode} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
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

const CORRECT = '1234';

const fakeApiVerify = async (pin: string): Promise<boolean> =>
    new Promise<boolean>((resolve) => setTimeout(() => resolve(pin === CORRECT), 1000));

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiHeader,
        TuiPincode,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
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
        const result$ = from(fakeApiVerify(value)).pipe(shareReplay(1));

        return merge(
            timer(500).pipe(
                takeUntil(result$),
                map(() => 'pending' as const),
            ),
            result$.pipe(
                switchMap((ok) =>
                    ok
                        ? of<TuiPincodeMode>('success')
                        : concat(
                              of<TuiPincodeMode>('invalid'),
                              timer(1000).pipe(map(() => 'dismissing' as const)),
                              timer(400).pipe(
                                  tap(() => this.control.setValue('')),
                                  map(() => null),
                              ),
                          ),
                ),
            ),
        );
    }
}
