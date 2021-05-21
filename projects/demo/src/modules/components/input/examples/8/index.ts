import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {Observable, of} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

const DATA: ReadonlyArray<User> = [
    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User('Alex', 'Inkin', avatar),
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
    );

    onClick({lastName, firstName}: User) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    // Request imitation
    private request(query: string): Observable<ReadonlyArray<User>> {
        return of(DATA.filter(item => TUI_DEFAULT_MATCHER(item, query)));
    }
}
