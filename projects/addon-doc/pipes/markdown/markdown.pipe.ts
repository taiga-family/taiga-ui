import type {PipeTransform, Signal} from '@angular/core';
import {Pipe} from '@angular/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {marked} from 'marked';
import {identity, map, of, switchMap} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMarkdown',
    pure: false,
})
export class TuiMarkdownPipe extends TuiObservablePipe implements PipeTransform {
    public transform(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string> = identity,
    ): TuiSafeHtml | null {
        return this.getSignal(value, mapper)();
    }

    @tuiPure
    protected getSignal(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string>,
    ): Signal<TuiSafeHtml | null> {
        return this.toSignal(
            of(value).pipe(
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
            ),
            null,
        );
    }
}
