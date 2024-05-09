import {ElementRef, inject} from '@angular/core';

export function tuiInjectElement<T = HTMLElement>(): T {
    return inject(ElementRef).nativeElement;
}
