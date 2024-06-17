import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER, TuiLetDirective} from '@taiga-ui/cdk';
import {TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {delay, filter, of, startWith, Subject, switchMap} from 'rxjs';

class User {
    constructor(
        protected readonly firstName: string,
        protected readonly lastName: string,
        protected readonly avatarUrl: string | null = null,
    ) {}

    protected toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: readonly User[] = [
    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),
    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiLetDirective,
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiTextfieldControllerModule,
        TuiAvatarComponent,
        TuiInitialsPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly search$ = new Subject<string | null>();

    protected readonly items$: Observable<readonly User[] | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),
        ),
        startWith(databaseMockData),
    );

    protected readonly testValue = new FormControl(databaseMockData[1]);

    protected onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }

    protected extractValueFromEvent(event: Event): string | null {
        return (event.target as HTMLInputElement)?.value || null;
    }

    /**
     * Service request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {
        const result = databaseMockData.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
