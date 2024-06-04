import type {ProviderToken, Signal} from '@angular/core';
import {inject, isSignal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {Observable} from 'rxjs';

type OutputKeysOf<T> = {
    [K in keyof T]: T[K] extends Observable<any> | Signal<any> ? K : never;
}[keyof T];

type OutputTypeOf<T> =
    T extends Signal<infer R> ? R : T extends Observable<infer O> ? O : never;

export function tuiDirectiveListener<T, K extends OutputKeysOf<T>>(
    token: ProviderToken<T>,
    key: K,
): Signal<OutputTypeOf<T[K]>> {
    const prop: any = inject(token, {self: true})[key];

    return isSignal(prop) ? prop : toSignal<any>(prop);
}
