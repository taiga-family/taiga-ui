import {ElementRef, InjectionToken, Provider} from '@angular/core';

import {TUI_DOC_SEE_ALSO} from '../../tokens/see-also';

export const PAGE_SEE_ALSO = new InjectionToken<readonly string[]>(`Page see also`);

export const PAGE_PROVIDERS: Provider[] = [
    {
        provide: PAGE_SEE_ALSO,
        deps: [ElementRef, TUI_DOC_SEE_ALSO],
        useFactory: seeAlsoProviderFactory,
    },
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function seeAlsoProviderFactory(
    {nativeElement}: ElementRef,
    seeAlsoGroups: ReadonlyArray<readonly string[]>,
): readonly string[] {
    const currentHeader = nativeElement.getAttribute(`header`);
    const groups = seeAlsoGroups.filter(group => group.includes(currentHeader)) || [];

    const seeAlsoSet = new Set(
        groups
            .join()
            .split(`,`)
            .filter(component => component && component !== currentHeader),
    );

    return Array.from(seeAlsoSet);
}
