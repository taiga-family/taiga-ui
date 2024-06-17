import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {tuiPure} from '@taiga-ui/cdk';
import {marked} from 'marked';
import {identity, map, of, Subject, switchMap, takeUntil} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiMarkdown',
    pure: false,
})
export class TuiMarkdownPipe implements PipeTransform {
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

    public transform(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string> = identity,
    ): TuiSafeHtml | null {
        return this.getSignal(value, mapper)();
    }

    @tuiPure
    private getSignal(
        value: TuiRawLoaderContent,
        mapper: TuiStringHandler<string>,
    ): Signal<TuiSafeHtml | null> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
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
                    takeUntil(this.destroy$),
                ),
                {injector: this.injector, initialValue: null},
            ),
        );
    }
}
