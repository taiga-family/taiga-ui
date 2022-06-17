import {InjectionToken} from '@angular/core';

export type TuiExtractGenericFromToken<T> = T extends InjectionToken<infer K> ? K : never;
