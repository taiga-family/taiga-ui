import {ClipboardModule} from '@angular/cdk/clipboard';
import {isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    type OnChanges,
    PLATFORM_ID,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_DOC_EXAMPLE_MARKDOWN_CODE_PROCESSOR} from '@taiga-ui/addon-doc/tokens';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoad} from '@taiga-ui/addon-doc/utils';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TUI_COPY_OPTIONS} from '@taiga-ui/kit/components/copy';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {HighlightAuto} from 'ngx-highlightjs';
import {HighlightLineNumbers} from 'ngx-highlightjs/line-numbers';
import {BehaviorSubject, map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-doc-code',
    imports: [ClipboardModule, HighlightAuto, HighlightLineNumbers, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[class._has-filename]': 'hasFilename'},
})
export class TuiDocCode implements OnChanges {
    private readonly copy = inject(TUI_COPY_OPTIONS).icon;
    private readonly icons = inject(TUI_COMMON_ICONS);
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
                    map(() => this.copy),
                    startWith(this.icons.check),
                ),
            ),
        ),
        {initialValue: this.copy},
    );

    protected readonly processor = toSignal(
        this.rawLoader$$.pipe(
            switchMap(tuiRawLoad),
            map((value: string) => this.markdownCodeProcessor(value)),
        ),
        {initialValue: []},
    );

    public readonly filename = input('');

    public readonly code = input<TuiRawLoaderContent>('');
    public readonly lineNumbers = input(true);

    public get hasFilename(): boolean {
        return !!this.filename();
    }

    public ngOnChanges(): void {
        this.rawLoader$$.next(this.code());
    }
}
