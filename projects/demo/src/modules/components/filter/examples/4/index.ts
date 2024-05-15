import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
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
    selector: 'tui-filter-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFilterExample4 {
    protected readonly items = Object.values(Department);

    protected readonly filters$ = new BehaviorSubject<readonly string[]>([]);

    @tuiPure
    protected get model$(): Observable<readonly string[]> {
        return this.filters$.pipe(
            map(value => (value.length === this.items.length ? [] : value)),
        );
    }

    @tuiPure
    protected get buttonAppearance$(): Observable<string> {
        return this.filters$.pipe(
            map(value =>
                value.length === this.items.length ? 'whiteblock-active' : 'whiteblock',
            ),
        );
    }

    protected onModelChange(model: readonly string[]): void {
        this.filters$.next(model);
    }

    protected toggleAll(): void {
        this.filters$.next(
            this.items.length === this.filters$.value.length ? [] : [...this.items],
        );
    }
}
