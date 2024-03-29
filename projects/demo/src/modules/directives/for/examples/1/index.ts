import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {BehaviorSubject, timer} from 'rxjs';

@Component({
    selector: 'tui-for-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiForExample1 {
    private readonly destroyRef = inject(DestroyRef);

    protected readonly items$ = new BehaviorSubject<readonly string[] | null>([]);

    protected refresh(): void {
        this.items$.next(null);

        const delay = Math.round(Math.random() * 2000);

        timer(delay)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() =>
                this.items$.next(
                    delay % 2
                        ? []
                        : ['William "Bill" S. Preston Esq.', 'Ted "Theodore" Logan'],
                ),
            );
    }
}
