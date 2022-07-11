import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
        readonly disabled: boolean = false,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const DATA: readonly User[] = [
    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User(
        'Alex',
        'Inkin',
        new URL('../../../../../assets/images/avatar.jpg', import.meta.url).toString(),
    ),
    new User('Gabriel José', 'de la Concordia «Gabo» García Márquez'),
];

@Component({
    selector: 'tui-input-example-8',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputExample8 {
    readonly control = new FormControl('');

    firstName = '';
    lastName = '';

    readonly items$ = this.control.valueChanges.pipe(
        startWith(''),
        switchMap(value =>
            this.request(value).pipe(
                map(response => {
                    if (response.length === 1 && String(response[0]) === value) {
                        this.onClick(response[0]);

                        return [];
                    } else {
                        return response;
                    }
                }),
            ),
        ),
        startWith(DATA),
    );

    onClick({lastName, firstName}: User): void {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    // Request imitation
    private request(query: string): Observable<readonly User[]> {
        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));
    }
}
