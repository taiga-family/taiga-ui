import {inject} from '@angular/core';
import {TUI_IS_MOBILE, tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_ALERT_POSITION = tuiCreateTokenFromFactory<string>(() =>
    inject(TUI_IS_MOBILE) ? `1rem 1rem 0 auto` : `2rem 3rem 0 auto`,
);
