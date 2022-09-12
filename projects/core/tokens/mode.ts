import {InjectionToken} from '@angular/core';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

export const TUI_MODE: InjectionToken<Observable<TuiBrightness | null>> =
    new InjectionToken<Observable<TuiBrightness | null>>(
        `[TUI_MODE]: Mode stream for private providers`,
    );
