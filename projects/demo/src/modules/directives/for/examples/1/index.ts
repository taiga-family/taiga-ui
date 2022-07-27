import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: `tui-for-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiForExample1 {
    readonly items$ = new BehaviorSubject<readonly string[] | null>([]);

    refresh(): void {
        this.items$.next(null);

        const delay = Math.round(Math.random() * 2000);

        setTimeout(() => {
            this.items$.next(
                delay % 2
                    ? []
                    : [`William "Bill" S. Preston Esq.`, `Ted "Theodore" Logan`],
            );
        }, delay);
    }
}
