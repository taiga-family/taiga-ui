import {ElementRef} from '@angular/core';
import {tuiInjectDocElement} from '@taiga-ui/cdk/utils/dom';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_SCROLL_REF = tuiCreateTokenFromFactory(
    () => new ElementRef(tuiInjectDocElement()),
);
