import type {Type} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_MOBILE_CALENDAR = new InjectionToken<Type<unknown>>(
    `A component for mobile data picker`,
);
