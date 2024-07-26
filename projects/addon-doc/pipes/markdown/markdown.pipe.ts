import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk/types';
import {marked} from 'marked';
import {gfmHeadingId} from 'marked-gfm-heading-id';
import type {Observable} from 'rxjs';
import {identity, map, of, switchMap} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiDocMarkdown',
})
export class TuiDocMarkdownPipe implements PipeTransform {
    private readonly sanitizer = inject(DomSanitizer);

    public transform(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string> = identity,
    ): Observable<TuiSafeHtml> {
        return of(value).pipe(
            switchMap(tuiRawLoad),
            map(mapper),
            switchMap(async (markdown) =>
                marked
                    .use(
                        {
                            async: true,
                            pedantic: false,
                            gfm: true,
                        },
                        gfmHeadingId(),
                    )
                    .parse(markdown),
            ),
            map((x) => this.sanitizer.bypassSecurityTrustHtml(x)),
        );
    }
}
