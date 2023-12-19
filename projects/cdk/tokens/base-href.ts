import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

export const TUI_BASE_HREF = tuiCreateTokenFromFactory(
    () => inject(DOCUMENT).querySelector('base')?.href ?? '',
);
