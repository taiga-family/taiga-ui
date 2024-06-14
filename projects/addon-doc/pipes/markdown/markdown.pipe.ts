import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {marked, Renderer} from 'marked';
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
                    .parse(markdown, {
                        renderer: new (class ChangelogRender extends Renderer {
                            public override heading(
                                text: string,
                                level: 1 | 2 | 3 | 4 | 5 | 6,
                            ): string {
                                const id = text
                                    .replaceAll(/[^\w\s]/gi, '')
                                    .replaceAll(/[\u0250-\uE007]/g, '')
                                    .replaceAll(
                                        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                                        '',
                                    )
                                    .trim()
                                    .toLowerCase()
                                    .split(' ')[0];

                                return `<h${level} id="${id}">${text}</h${level}>`;
                            }
                        })(),
                    }),
            ),
        );
    }
}
