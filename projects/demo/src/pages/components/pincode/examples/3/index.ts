import {Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPincodeMode, TuiPincode, TuiSegmented} from '@taiga-ui/kit';
import {from, map, type Observable, of, shareReplay, switchMap} from 'rxjs';

const CORRECT: Record<4 | 5 | 6, string> = {4: '1234', 5: '12345', 6: '123456'};

// Fast loading example — response < 500ms, no pending state shown
const FAST_LATENCY = 300;

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiPincode, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly correct = CORRECT;
    protected readonly types = ['text', 'password'] as const;
    protected readonly lengths = [4, 5, 6] as const;
    protected type: 'password' | 'text' = 'text';
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
        return from(
            new Promise<boolean>((resolve) =>
                setTimeout(() => resolve(value === CORRECT[this.length]), FAST_LATENCY),
            ),
        ).pipe(
            shareReplay(1),
            map((ok) => (ok ? 'success' : 'invalid')),
        );
    }
}
