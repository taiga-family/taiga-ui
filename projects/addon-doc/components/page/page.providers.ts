import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {TUI_DOC_SEE_ALSO} from '@taiga-ui/addon-doc/tokens';

/**
 * Array if related page titles
 */
export const TUI_PAGE_SEE_ALSO = new InjectionToken<readonly string[]>(
    `[TUI_PAGE_SEE_ALSO]`,
);

/**
 * @deprecated: use {@link TUI_PAGE_SEE_ALSO}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PAGE_SEE_ALSO = TUI_PAGE_SEE_ALSO;

export const TUI_PAGE_PROVIDERS: Provider[] = [
    {
        provide: TUI_PAGE_SEE_ALSO,
        deps: [ElementRef, TUI_DOC_SEE_ALSO],
        useFactory: (
            {nativeElement}: ElementRef,
            seeAlsoGroups: ReadonlyArray<readonly string[]>,
        ): readonly string[] => {
            const currentHeader = nativeElement.getAttribute(`header`);
            const groups =
                seeAlsoGroups.filter(group => group.includes(currentHeader)) || [];

            const seeAlsoSet = new Set(
                groups
                    .join()
                    .split(`,`)
                    .filter(component => component && component !== currentHeader),
            );

            return Array.from(seeAlsoSet);
        },
    },
];

/**
 * @deprecated: use {@link TUI_PAGE_PROVIDERS}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const PAGE_PROVIDERS = TUI_PAGE_PROVIDERS;
