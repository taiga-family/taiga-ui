import {InjectionToken} from '@angular/core';
import {TuiBrightness} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

/**
 * Mode stream for private providers
 */
export const TUI_MODE: InjectionToken<Observable<TuiBrightness | null>> =
    new InjectionToken<Observable<TuiBrightness | null>>(`[TUI_MODE]`);
