import {InjectionToken} from '@angular/core';
import type {TuiBrightness} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';

export const TUI_MODE: InjectionToken<Observable<TuiBrightness | null>> =
    new InjectionToken<Observable<TuiBrightness | null>>(
        `Mode stream for private providers`,
    );
