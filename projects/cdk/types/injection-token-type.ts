import type {InjectionToken} from '@angular/core';

export type TuiInjectionTokenType<Token> = Token extends InjectionToken<infer T>
    ? T
    : never;
