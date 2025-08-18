import {Pipe, type PipeTransform} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {fromEvent, map, type Observable, startWith} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFallbackSrc',
})
export class TuiFallbackSrcPipe implements PipeTransform {
    private readonly el = tuiInjectElement();

    public transform(src: string, fallback: string): Observable<string> {
        return fromEvent(this.el, 'error', {capture: true}).pipe(
            map(() => fallback),
            startWith(src || fallback),
        );
    }
}
