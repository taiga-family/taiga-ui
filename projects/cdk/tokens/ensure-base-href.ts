import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

/**
 * @deprecated: use {@link TUI_BASE_HREF}
 */
export const TUI_ENSURE_BASE_HREF = tuiCreateTokenFromFactory(() => {
    const baseHref = inject(DOCUMENT).querySelector(`base`)?.href;

    if (baseHref) {
        return baseHref;
    }

    const link = inject(DOCUMENT).createElement(`a`);

    link.href = ``;

    return link.pathname;
});
