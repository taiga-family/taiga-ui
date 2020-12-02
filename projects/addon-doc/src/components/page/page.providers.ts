import {InjectionToken, Provider} from '@angular/core';
import {Attribute} from '@angular/core';
import {TUI_DOC_SEE_ALSO} from '../../tokens/see-also';

export const PAGE_SEE_ALSO = new InjectionToken<ReadonlyArray<string>>('Page see also');

export const PAGE_PROVIDERS: Provider[] = [
    {
        provide: PAGE_SEE_ALSO,
        deps: [[new Attribute('header')], TUI_DOC_SEE_ALSO],
        useFactory: seeAlsoProviderFactory,
    },
];

export function seeAlsoProviderFactory(
    header: string,
    seeAlsoGroups: ReadonlyArray<ReadonlyArray<string>>,
): ReadonlyArray<string> {
    const groups = seeAlsoGroups.filter(group => group.indexOf(header) !== -1) || [];

    const seeAlsoSet = new Set(
        groups
            .join()
            .split(',')
            .filter(component => component && component !== header),
    );

    return Array.from(seeAlsoSet);
}
