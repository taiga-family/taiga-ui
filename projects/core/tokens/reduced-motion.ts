import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_REDUCED_MOTION = tuiCreateTokenFromFactory(
    () =>
        inject(DOCUMENT).defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)')
            .matches ?? false,
);
