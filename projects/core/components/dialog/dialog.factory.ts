import {inject, INJECTOR} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

import type {TuiDialogContext, TuiDialogOptions} from './dialog.interfaces';
import {TuiDialogService} from './dialog.service';

type ReplaceNever<T> = [T] extends [never] ? void : T;

type ReplaceAny<T> = 0 extends T & 1 ? void : T;

type ExtractDialogData<T> = ReplaceNever<
    {
        [K in keyof T]: ReplaceAny<T[K]> extends TuiDialogContext<any, infer D>
            ? D
            : never;
    }[keyof T]
>;

type ExtractDialogResult<T> = ReplaceNever<
    {
        [K in keyof T]: ReplaceAny<T[K]> extends TuiDialogContext<infer R, any>
            ? R
            : never;
    }[keyof T]
>;

export function tuiDialog<
    T,
    D extends ExtractDialogData<T>,
    R extends ExtractDialogResult<T>,
>(
    component: new () => T,
    options?: Partial<Omit<TuiDialogOptions<D>, 'data'>>,
): (data: D) => Observable<R> {
    const dialogService = inject(TuiDialogService);
    const injector = inject(INJECTOR);

    return (data) =>
        dialogService.open(new PolymorpheusComponent(component, injector), {
            ...options,
            data,
        });
}
