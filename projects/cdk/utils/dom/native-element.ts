import {ElementRef, inject} from '@angular/core';

export function tuiNativeElement<T = HTMLElement>(): T {
    return inject(ElementRef).nativeElement;
}
