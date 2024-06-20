import {ClipboardModule} from '@angular/cdk/clipboard';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '@taiga-ui/addon-doc/tokens';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {Highlight} from 'ngx-highlightjs';
import {BehaviorSubject, map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-doc-code',
    imports: [NgIf, AsyncPipe, NgForOf, Highlight, TuiButton, ClipboardModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocCode {
    private readonly rawLoader$$ = new BehaviorSubject<TuiRawLoaderContent>('');

    protected readonly markdownCodeProcessor = inject<TuiHandler<string, string[]>>(
        TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
    );

    protected readonly copy$ = new Subject<void>();

    protected readonly icon$ = this.copy$.pipe(
        switchMap(() =>
            timer(2000).pipe(
                map(() => '@tui.copy'),
                startWith('@tui.check'),
            ),
        ),
    );

    protected readonly processor$ = this.rawLoader$$.pipe(
        switchMap(tuiRawLoad),
        map((value: string): string[] => this.markdownCodeProcessor(value)),
    );

    @Input()
    public filename = '';

    @Input()
    public set code(code: TuiRawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    @HostBinding('class._has-filename')
    public get hasFilename(): boolean {
        return !!this.filename;
    }
}
