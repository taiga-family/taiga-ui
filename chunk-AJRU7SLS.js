import"./chunk-HU6DUUP4.js";var t=`import {inject, Injectable} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TUI_COUNTRIES} from '@taiga-ui/kit';
import {delay, map, type Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DatabaseServer {
    protected readonly countries$: Observable<string[]> = toObservable(
        inject(TUI_COUNTRIES),
    ).pipe(map(Object.values));

    // Request imitation
    public request$(query: string): Observable<readonly string[]> {
        return this.countries$.pipe(
            map((countries) =>
                countries.filter((item) => TUI_DEFAULT_MATCHER(item, query)),
            ),
            delay(Math.random() * 2_000 + 1_000),
        );
    }
}
`;export{t as default};
