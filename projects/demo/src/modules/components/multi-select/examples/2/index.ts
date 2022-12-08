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
    new User(`Roman`, `Sedov`, `https://avatars.githubusercontent.com/u/10106368`),
    new User(`Alex`, `Inkin`, assets`/images/avatar.jpg`),
    new User(`Dmitriy`, `Demenskiy`),
    new User(`Evgeniy`, `Mamaev`),
    new User(`Ivan`, `Ishmametiev`),
    new User(`Igor`, `Katsuba`),
    new User(`Yulia`, `Tsareva`),
];

@Component({
    selector: `tui-multi-select-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample2 {
    readonly search$ = new Subject<string | null>();

    readonly items$: Observable<readonly User[] | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),
        ),
        startWith(databaseMockData),
    );

    readonly testValue = new FormControl([databaseMockData[0]]);

    onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {
        const result = databaseMockData.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ``),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
