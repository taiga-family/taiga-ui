import {
    ElementRef,
    InjectionToken,
    type Provider,
    signal,
    type WritableSignal,
} from '@angular/core';
import {type ActivatedRouteSnapshot} from '@angular/router';
import {TUI_DOC_SEE_ALSO} from '@taiga-ui/addon-doc/tokens';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_DOC_TABS = new InjectionToken<
    TuiHandler<ActivatedRouteSnapshot, Record<string, PolymorpheusContent>>
>(ngDevMode ? 'TUI_DOC_TABS' : '', {
    factory: () => () => ({}),
});

/**
 * Array if related page titles
 */
export const PAGE_SEE_ALSO = new InjectionToken<WritableSignal<readonly string[]>>(
    ngDevMode ? 'PAGE_SEE_ALSO' : '',
);

export const PAGE_PROVIDERS: Provider[] = [
    {
        provide: PAGE_SEE_ALSO,
        deps: [ElementRef, TUI_DOC_SEE_ALSO],
        useFactory: (
            {nativeElement}: ElementRef,
            seeAlsoGroups: ReadonlyArray<readonly string[]>,
        ): WritableSignal<readonly string[]> => {
            const currentHeader = nativeElement.getAttribute('header');
            const groups =
                seeAlsoGroups.filter((group) => group.includes(currentHeader)) || [];

            const seeAlsoSet = new Set(
                groups
                    .join()
                    .split(',')
                    .filter((component) => component && component !== currentHeader),
            );

            return signal(Array.from(seeAlsoSet));
        },
    },
];
