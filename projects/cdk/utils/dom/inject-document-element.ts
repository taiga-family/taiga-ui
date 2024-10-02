import {DOCUMENT} from '@angular/common';
import {inject} from '@angular/core';

export function tuiInjectDocElement(): HTMLElement {
    return inject(DOCUMENT).documentElement;
}
