import type {Injector} from '@angular/core';
import {assertInInjectionContext, inject, INJECTOR} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

import type {TuiDialogContext, TuiDialogOptions} from './dialog.interfaces';
import {TuiDialogService} from './dialog.service';

type SingleUnionOrNever<T, U = T> = [T] extends [never]
    ? never
    : T extends U
      ? [U] extends [T]
          ? T
          : never
      : never;

type ReplaceAny<T> = 0 extends T & 1 ? void : T;

type ContextKeys<T> = {
    [K in keyof T]: ReplaceAny<T[K]> extends TuiDialogContext<any, any> ? K : never;
}[keyof T];

type AssertNotMultipleContexts<T, K extends keyof T> = [K] extends [never]
    ? new (...args: any[]) => T
    : [SingleUnionOrNever<K>] extends [never]
      ? 'Component has multiple context. Cannot determine the type...'
      : new (...args: any[]) => T;

type ExtractDialogData<T, K extends keyof T = ContextKeys<T>> = [K] extends [never]
    ? void
    : [SingleUnionOrNever<K>] extends [never]
      ? never
      : T[K] extends TuiDialogContext<any, infer D>
        ? D
        : void;

type ExtractDialogResult<T, K extends keyof T = ContextKeys<T>> = [K] extends [never]
    ? void
    : [SingleUnionOrNever<K>] extends [never]
      ? never
      : T[K] extends TuiDialogContext<infer R, any>
        ? R
        : void;

type Options<T> = Omit<TuiDialogOptions<T>, 'data'> & {injector: Injector};

export function tuiDialog<
    T,
    K extends ContextKeys<T>,
    D extends ExtractDialogData<T, K>,
    R extends ExtractDialogResult<T, K>,
>(
    component: AssertNotMultipleContexts<T, K>,
    {injector, ...options}: Partial<Options<D>> = {},
): (data: D) => Observable<R> {
    if (!injector) {
        assertInInjectionContext(tuiDialog);
        injector = inject(INJECTOR);
    }

    const dialogService = injector.get(TuiDialogService);

    return (data) =>
        dialogService.open(
            new PolymorpheusComponent(component as new () => T, injector),
            {
                ...options,
                data,
            },
        );
}
