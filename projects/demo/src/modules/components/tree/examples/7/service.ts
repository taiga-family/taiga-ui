import {Injectable} from '@angular/core';
import type {TuiTreeLoader} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

import type {Item} from './index';

@Injectable()
export class TreeLoader implements TuiTreeLoader<Item> {
    loadChildren({text}: Item): Observable<Item[]> {
        return timer(3000).pipe(
            mapTo([
                {text: `${text} 1`, children: Math.random() > 0.5},
                {text: `${text} 2`, children: Math.random() > 0.5},
                {text: `${text} 3`, children: Math.random() > 0.5},
            ]),
        );
    }

    hasChildren({children}: Item): boolean {
        return !!children;
    }
}
