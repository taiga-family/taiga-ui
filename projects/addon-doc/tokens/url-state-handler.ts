import type {UrlTree} from '@angular/router';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {InjectionToken} from '@angular/core';

/**
 * TODO: delete it in 5.0
 * Replace the following approach to append query params
 * ```ts
 * urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);
 * locationRef = inject(Location);
 *
 * this.locationRef.go(this.urlStateHandler(tree));
 * ```
 * with this one:
 * ```ts
 * router = inject(Router);
 * activatedRoute = inject(ActivatedRoute);
 *
 * void this.router.navigate([], {
 *     relativeTo: this.activatedRoute,
 *     queryParams: {sandboxWidth: 300},
 *     queryParamsHandling: 'merge',
 * });
 * ```
 * It is more robust to the cases when application has base href.
 */
export const TUI_DOC_URL_STATE_HANDLER = new InjectionToken<TuiStringHandler<UrlTree>>(
    ngDevMode ? 'TUI_DOC_URL_STATE_HANDLER' : '',
    {
        factory: () => String,
    },
);
