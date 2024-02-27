import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {BehaviorSubject, takeUntil, timer} from 'rxjs';

@Component({
    selector: 'tui-for-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiForExample1 {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    protected readonly items$ = new BehaviorSubject<readonly string[] | null>([]);

    protected refresh(): void {
        this.items$.next(null);

        const delay = Math.round(Math.random() * 2000);

        timer(delay)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() =>
                this.items$.next(
                    delay % 2
                        ? []
                        : ['William "Bill" S. Preston Esq.', 'Ted "Theodore" Logan'],
                ),
            );
    }
}
