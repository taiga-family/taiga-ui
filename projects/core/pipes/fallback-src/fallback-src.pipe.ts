import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {Observable} from 'rxjs';
import {fromEvent, map, merge, startWith} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFallbackSrc',
})
export class TuiFallbackSrcPipe implements PipeTransform {
    private readonly el = tuiInjectElement();

    public transform(src: string, fallback: string): Observable<string> {
        return merge(
            fromEvent(this.el, 'tui-icon-error'),
            fromEvent(this.el, 'error', {capture: true}),
        ).pipe(
            map(() => fallback),
            startWith(src),
        );
    }
}
