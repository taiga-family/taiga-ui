import {inject, InjectionToken} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiWindowSize} from '@taiga-ui/cdk/utils/dom';
import {type Observable} from 'rxjs';

/**
 * @deprecated: use {@link tuiWindowSize}
 */
export const TUI_WINDOW_SIZE = new InjectionToken<Observable<DOMRect>>(
    ngDevMode ? 'TUI_WINDOW_SIZE' : '',
    {factory: () => toObservable(tuiWindowSize(inject(WA_WINDOW)))},
);
