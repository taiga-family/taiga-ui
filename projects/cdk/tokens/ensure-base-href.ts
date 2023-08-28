import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const TUI_ENSURE_BASE_HREF: InjectionToken<string> = new InjectionToken<string>(
    `[TUI_ENSURE_BASE_HREF]`,
    {
        factory: () => {
            const baseHref = inject(DOCUMENT).querySelector(`base`)?.href;

            if (baseHref) {
                return baseHref;
            }

            const link = inject(DOCUMENT).createElement(`a`);

            link.href = ``;

            return link.pathname;
        },
    },
);
