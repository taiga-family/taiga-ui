import * as avatar from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {delay, filter, startWith, switchMap} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

const databaseMockData: ReadonlyArray<User> = [
    new User('Роман', 'Седов', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User('Александр', 'Инкин', avatar),
];

@Component({
    selector: 'tui-multi-select-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample2 {
    readonly search$ = new Subject<string>();

    readonly items$: Observable<ReadonlyArray<User> | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<ReadonlyArray<User> | null>(null)),
        ),
        startWith(databaseMockData),
    );

    readonly testValue = new FormControl([databaseMockData[0]]);

    onSearchChange(searchQuery: string) {
        this.search$.next(searchQuery);
    }

    /**
     * Имитация запроса на сервер
     */
    private serverRequest(searchQuery: string): Observable<ReadonlyArray<User>> {
        const result = databaseMockData.filter(
            user =>
                user.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1,
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
