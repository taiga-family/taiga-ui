import {InjectionToken} from '@angular/core';
import {Observable} from 'rxjs';

export const TUI_IS_MOBILE_RES = new InjectionToken<Observable<boolean>>(
    'Mobile resolution stream for private providers',
);
