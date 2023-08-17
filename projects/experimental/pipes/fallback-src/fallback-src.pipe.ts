import {ElementRef, Inject, Pipe, PipeTransform} from '@angular/core';
import {TUI_ICON_ERROR} from '@taiga-ui/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Pipe({
    name: `tuiFallbackSrc`,
})
export class TuiFallbackSrcPipe implements PipeTransform {
    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    transform(src: string, fallback: string): Observable<string> {
        return merge(
            fromEvent(this.el.nativeElement, TUI_ICON_ERROR),
            fromEvent(this.el.nativeElement, `error`, {capture: true}),
        ).pipe(
            map(() => fallback),
            startWith(src),
        );
    }
}
