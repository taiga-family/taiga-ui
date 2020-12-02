import {Component} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

enum Department {
    SME = 'SME',
    TCRM = 'TCRM',
    BPM = 'BPM',
    WEB_OFFICE = 'WebOffice',
}

@Component({
    selector: 'tui-filter-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample4 {
    readonly items = Object.values(Department);

    readonly filters$ = new BehaviorSubject<ReadonlyArray<string>>([]);

    @tuiPure
    get model$(): Observable<ReadonlyArray<string>> {
        return this.filters$.pipe(
            map(value => (value.length === this.items.length ? [] : value)),
        );
    }

    @tuiPure
    get buttonAppearance$(): Observable<TuiAppearance> {
        return this.filters$.pipe(
            map(value =>
                value.length === this.items.length
                    ? TuiAppearance.WhiteblockActive
                    : TuiAppearance.Whiteblock,
            ),
        );
    }

    onModelChange(model: ReadonlyArray<string>) {
        this.filters$.next(model);
    }

    toggleAll() {
        this.filters$.next(
            this.items.length === this.filters$.value.length ? [] : [...this.items],
        );
    }
}
