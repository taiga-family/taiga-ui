import {Subject} from 'rxjs';

/**
 * Service to work with items that appear and disappear (i.e. popups, alerts etc.)
 */
export interface TuiItemsService<T> {
    /**
     * Stream for openiПоток открытия новых элементов.
     */
    readonly open$: Subject<T>;

    /**
     * Поток закрытия открытых элементов.
     */
    readonly close$: Subject<T>;
}
