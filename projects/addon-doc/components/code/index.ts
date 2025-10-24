import {ClipboardModule} from '@angular/cdk/clipboard';
import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    input,
    PLATFORM_ID,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR,
    TUI_DOC_ICONS,
} from '@taiga-ui/addon-doc/tokens';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {Highlight} from 'ngx-highlightjs';
import {BehaviorSubject, map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-doc-code',
    imports: [ClipboardModule, Highlight, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.visibility]': 'isServer ? "hidden" : "visible"',
        '[class._has-filename]': 'hasFilename',
    },
})
export class TuiDocCode {
    private readonly icons = inject(TUI_DOC_ICONS);
    private readonly rawLoader$$ = new BehaviorSubject<TuiRawLoaderContent>('');
    private readonly texts = inject(TUI_COPY_TEXTS);

    protected readonly isServer = isPlatformServer(inject(PLATFORM_ID));

    protected readonly markdownCodeProcessor: TuiHandler<string, readonly string[]> =
        inject(TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR);

    protected readonly copy$ = new Subject<void>();
    protected readonly copyText = computed(() => this.texts()[0]);

    protected readonly icon = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(2000).pipe(
                    map(() => this.icons.copy),
                    startWith(this.icons.check),
                ),
            ),
        ),
        {initialValue: this.icons.copy},
    );

    protected readonly processor = toSignal(
        this.rawLoader$$.pipe(
            switchMap(tuiRawLoad),
            map((value: string) => this.markdownCodeProcessor(value)),
        ),
        {initialValue: []},
    );

    public readonly filename = input('');

    @Input()
    public set code(code: TuiRawLoaderContent) {
        this.rawLoader$$.next(code);
    }

    public get hasFilename(): boolean {
        return !!this.filename();
    }
}
