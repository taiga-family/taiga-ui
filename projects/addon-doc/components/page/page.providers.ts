import type {Provider} from '@angular/core';
import {ElementRef} from '@angular/core';
import type {ActivatedRouteSnapshot} from '@angular/router';
import {TUI_DOC_SEE_ALSO} from '@taiga-ui/addon-doc/tokens';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_DOC_TABS = tuiCreateToken<
    TuiHandler<ActivatedRouteSnapshot, Record<string, PolymorpheusContent>>
>(() => ({}));

/**
 * Array if related page titles
 */
export const PAGE_SEE_ALSO = tuiCreateToken<readonly string[]>();

export const PAGE_PROVIDERS: Provider[] = [
    {
        provide: PAGE_SEE_ALSO,
        deps: [ElementRef, TUI_DOC_SEE_ALSO],
        useFactory: (
            {nativeElement}: ElementRef,
            seeAlsoGroups: ReadonlyArray<readonly string[]>,
        ): readonly string[] => {
            const currentHeader = nativeElement.getAttribute('header');
            const groups =
                seeAlsoGroups.filter((group) => group.includes(currentHeader)) || [];

            const seeAlsoSet = new Set(
                groups
                    .join()
                    .split(',')
                    .filter((component) => component && component !== currentHeader),
            );

            return Array.from(seeAlsoSet);
        },
    },
];
