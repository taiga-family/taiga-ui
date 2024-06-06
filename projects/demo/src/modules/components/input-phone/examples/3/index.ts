import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_DEFAULT_MATCHER, TuiLetDirective, tuiPure} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiInputPhoneModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import type {Observable} from 'rxjs';
import {
    combineLatest,
    map,
    merge,
    of,
    share,
    startWith,
    Subject,
    switchMap,
    tap,
} from 'rxjs';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phone: string,
        public readonly avatarUrl: string | null = null,
        public readonly disabled = false,
    ) {}

    public toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const DATA: readonly User[] = [
    new User(
        'Roman',
        'Sedov',
        '+75678901234',
        'https://avatars.githubusercontent.com/u/10106368',
    ),
    new User('Alex', 'Inkin', '+75678901234', assets`/images/avatar.jpg`),
];

@Component({
    standalone: true,
    imports: [
        TuiInputPhoneModule,
        TuiLetDirective,
        AsyncPipe,
        TuiTextfieldControllerModule,
        FormsModule,
        NgIf,
        TuiDataListComponent,
        TuiDataListDirective,
        NgForOf,
        TuiOptionComponent,
        TuiAvatarComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly search$ = new Subject<string>();

    private readonly selected$ = new Subject<User>();

    protected value = '';

    protected readonly user$ = merge(
        this.selected$,
        this.search$.pipe(
            switchMap(value =>
                this.request(value).pipe(
                    map(response =>
                        this.isFullMatch(response, value) ? response[0] : null,
                    ),
                ),
            ),
        ),
    ).pipe(
        tap(user => {
            if (user) {
                this.value = user.phone;
            }
        }),
    );

    protected readonly items$ = this.search$.pipe(
        startWith(''),
        switchMap(value =>
            this.request(value).pipe(
                map(response => (this.isFullMatch(response, value) ? [] : response)),
            ),
        ),
    );

    protected readonly placeholder$ = combineLatest([this.user$, this.search$]).pipe(
        map(([user, search]) => user || this.getPlaceholder(search)),
        startWith('Phone number or name'),
    );

    protected onSearch(search: string): void {
        this.search$.next(search);
    }

    protected onClick(user: User): void {
        this.selected$.next(user);
    }

    // Request imitation
    @tuiPure
    private request(query: string): Observable<readonly User[]> {
        return of(
            DATA.filter(
                item =>
                    TUI_DEFAULT_MATCHER(item, query) ||
                    TUI_DEFAULT_MATCHER(item.phone, query),
            ),
        ).pipe(share());
    }

    private getPlaceholder(search: string): string {
        if (!search) {
            return 'Phone number or name';
        }

        if (search.startsWith('+')) {
            return 'Phone number';
        }

        return 'Name';
    }

    private isFullMatch(response: readonly User[], value: string): boolean {
        return (
            response.length === 1 &&
            (String(response[0]) === value || response[0].phone === value)
        );
    }
}
