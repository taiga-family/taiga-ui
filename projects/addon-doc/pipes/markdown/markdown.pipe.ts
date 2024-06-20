import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk/types';
import {marked} from 'marked';
import type {Observable} from 'rxjs';
import {identity, map, of, switchMap} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMarkdown',
})
export class TuiMarkdownPipe implements PipeTransform {
    public transform(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string> = identity,
    ): Observable<TuiSafeHtml> {
        return of(value).pipe(
            switchMap(tuiRawLoad),
            map(mapper),
            switchMap(async markdown =>
                marked
                    .use({
                        async: true,
                        pedantic: false,
                        gfm: true,
                    })
                    .parse(markdown),
            ),
        );
    }
}
