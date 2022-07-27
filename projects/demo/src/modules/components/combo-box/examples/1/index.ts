import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {Observable, of, Subject} from 'rxjs';
import {delay, filter, startWith, switchMap} from 'rxjs/operators';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: readonly User[] = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, assets`/images/avatar.jpg`),
];

@Component({
    selector: `tui-combo-box-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiComboBoxExample1 {
    readonly search$: Subject<string | null> = new Subject();

    readonly items$: Observable<readonly User[] | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),
        ),
        startWith(databaseMockData),
    );

    readonly testValue = new FormControl(databaseMockData[1]);

    onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    extractValueFromEvent(event: Event): string | null {
        return (event.target as HTMLInputElement)?.value || null;
    }

    /**
     * Service request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {
        const result = databaseMockData.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ``),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
