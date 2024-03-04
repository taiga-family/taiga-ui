import {inject, Pipe, type PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/interfaces';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {type TuiSafeHtml, type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_SANITIZER} from '@taiga-ui/core';
import {marked, Renderer} from 'marked';
import {identity, map, type Observable, of, switchMap} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMarkdown',
})
export class TuiMarkdownPipe implements PipeTransform {
    private readonly tuiSanitizer = inject(TUI_SANITIZER, {optional: true});
    private readonly sanitizer = inject(DomSanitizer);

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
            map(parsed =>
                this.sanitizer.bypassSecurityTrustHtml(
                    (this.tuiSanitizer
                        ? this.tuiSanitizer.sanitize(SecurityContext.HTML, parsed)
                        : this.sanitizer.sanitize(SecurityContext.HTML, parsed)) || '',
                ),
            ),
        );
    }
}
