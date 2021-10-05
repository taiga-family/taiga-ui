import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component, Inject, Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';
import {Observable, of, Subject} from 'rxjs';
import {
    delay,
    distinctUntilChanged,
    shareReplay,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';

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

const databaseMockData: ReadonlyArray<User> = [
    new User('Roman', 'Sedov', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User('Alex', 'Inkin', avatar),
];

// @dynamic
@Injectable()
export class Service {
    private readonly request$ = new Subject<string>();

    // Imitating server request with switchMap + delay pair
    private readonly response$ = this.request$.pipe(
        distinctUntilChanged(),
        switchMap(query =>
            of(databaseMockData.filter(user => TUI_DEFAULT_MATCHER(user, query))).pipe(
                delay(Math.random() * 1000 + 500),
                startWith(null),
            ),
        ),
        takeUntil(this.destroy$),
        shareReplay(1),
    );

    constructor(@Inject(TuiDestroyService) private readonly destroy$: Observable<void>) {}

    request(query: string | null): Observable<ReadonlyArray<User> | null> {
        this.request$.next(query || '');

        return this.response$;
    }
}

@Component({
    selector: 'tui-combo-box-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [Service, TuiDestroyService],
    changeDetection,
})
export class TuiComboBoxExample2 {
    search = '';

    readonly control = new FormControl(databaseMockData[0]);

    constructor(@Inject(Service) readonly service: Service) {}
}
