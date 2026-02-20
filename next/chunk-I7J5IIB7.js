import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiFilter} from '@taiga-ui/kit';
import {BehaviorSubject, map} from 'rxjs';

const Department = {
    IT: 'IT',
    HR: 'HR',
    HeadOffice: 'Heads',
    Delivery: 'Delivery',
    Admin: 'Administrative',
    Business: 'Business lines',
    MB: 'Business technologies',
    Finance: 'Corporate Finance',
    Payment: 'Payment Systems',
    Operating: 'Operating service lines',
    Marketing: 'Media-marketing',
    Security: 'Security Service',
} as const;

@Component({
    imports: [AsyncPipe, FormsModule, TuiButton, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = Object.values(Department);
    protected readonly filters$ = new BehaviorSubject<readonly string[]>([]);

    protected readonly checked$ = this.filters$.pipe(
        map(({length}) => (length === this.items.length ? 'checked' : '')),
    );

    protected readonly model$ = this.filters$.pipe(
        map((value) => (value.length === this.items.length ? [] : value)),
    );

    protected onModelChange(model: readonly string[]): void {
        this.filters$.next(model);
    }

    protected toggleAll(): void {
        this.filters$.next(
            this.items.length === this.filters$.value.length ? [] : [...this.items],
        );
    }
}
`;export{i as default};
