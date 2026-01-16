import {inject, InjectionToken, type Provider} from '@angular/core';
import {type ActivatedRouteSnapshot} from '@angular/router';
import {TUI_DOC_SEE_ALSO} from '@taiga-ui/addon-doc/tokens';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_DOC_TABS = new InjectionToken<
    TuiHandler<ActivatedRouteSnapshot, Record<string, PolymorpheusContent>>
>(ngDevMode ? 'TUI_DOC_TABS' : '', {factory: () => () => ({})});

/**
 * Array if related page titles
 */
export const PAGE_SEE_ALSO = new InjectionToken<readonly string[]>(
    ngDevMode ? 'PAGE_SEE_ALSO' : '',
);

export const PAGE_PROVIDERS: Provider[] = [
    {
        provide: PAGE_SEE_ALSO,
        useFactory: (): readonly string[] => {
            const current = tuiInjectElement().getAttribute('header') || '';
            const groups =
                inject(TUI_DOC_SEE_ALSO).filter((group) => group.includes(current)) || [];

            return Array.from(
                new Set(
                    groups
                        .join()
                        .split(',')
                        .filter((component) => component && component !== current),
                ),
            );
        },
    },
];
