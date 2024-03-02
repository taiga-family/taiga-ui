import {Injectable} from '@angular/core';
import {type TuiTreeLoader} from '@taiga-ui/kit';
import {map, type Observable, timer} from 'rxjs';

import type {Item} from './index';

@Injectable()
export class TreeLoader implements TuiTreeLoader<Item> {
    public loadChildren({text}: Item): Observable<Item[]> {
        return timer(3000).pipe(
            map(() => [
                {text: `${text} 1`, children: Math.random() > 0.5},
                {text: `${text} 2`, children: Math.random() > 0.5},
                {text: `${text} 3`, children: Math.random() > 0.5},
            ]),
        );
    }

    public hasChildren({children}: Item): boolean {
        return !!children;
    }
}
