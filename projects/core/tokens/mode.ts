import {InjectionToken} from '@angular/core';
import {TuiModeVariants} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';

export const TUI_MODE: InjectionToken<
    Observable<TuiModeVariants | null>
> = new InjectionToken<Observable<TuiModeVariants | null>>(
    'Mode stream for private providers',
);
