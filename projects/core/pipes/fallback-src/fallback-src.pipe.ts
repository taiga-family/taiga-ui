import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {fromEvent, map, startWith} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFallbackSrc',
})
export class TuiFallbackSrcPipe implements PipeTransform {
    private readonly el = tuiInjectElement();

    public transform(
        src: string,
        fallback: PolymorpheusContent,
    ): Observable<PolymorpheusContent> {
        return fromEvent(this.el, 'error', {capture: true}).pipe(
            map(() => fallback),
            startWith(src),
        );
    }
}
