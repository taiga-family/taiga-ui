import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-for-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiForExample1 {
    readonly items$ = new BehaviorSubject<readonly string[] | null>([]);

    refresh() {
        this.items$.next(null);

        const delay = Math.round(Math.random() * 2000);

        setTimeout(() => {
            this.items$.next(
                delay % 2
                    ? []
                    : ['William "Bill" S. Preston Esq.', 'Ted "Theodore" Logan'],
            );
        }, delay);
    }
}
