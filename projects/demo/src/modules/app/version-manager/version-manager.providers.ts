import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';
import {TAIGA_VERSIONS_META, TaigaVersionMeta} from './versions.constants';

export const SELECTED_VERSION_META = new InjectionToken<TaigaVersionMeta>(
    'Meta information about selected version of Taiga docs',
);

export const VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: SELECTED_VERSION_META,
        useFactory: (s: LocationStrategy) =>
            TAIGA_VERSIONS_META.find(
                meta => meta.baseHref === s.getBaseHref().replace(/\//g, ''),
            ),
        deps: [LocationStrategy],
    },
];
