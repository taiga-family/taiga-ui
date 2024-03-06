import type {PipeTransform} from '@angular/core';
import {ElementRef, inject, Pipe} from '@angular/core';
import {TUI_ICON_ERROR} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {fromEvent, map, merge, startWith} from 'rxjs';

@Pipe({
    name: 'tuiFallbackSrc',
})
export class TuiFallbackSrcPipe implements PipeTransform {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;

    public transform(src: string, fallback: string): Observable<string> {
        return merge(
            fromEvent(this.el, TUI_ICON_ERROR),
            fromEvent(this.el, 'error', {capture: true}),
        ).pipe(
            map(() => fallback),
            startWith(src),
        );
    }
}
