import {Clipboard} from '@angular/cdk/clipboard';
import {AsyncPipe, DOCUMENT, NgComponentOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    type OnChanges,
    signal,
    type Type,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {WA_LOCATION} from '@ng-web-apis/common';
import {
    WaIntersectionObservee,
    WaIntersectionObserverDirective,
} from '@ng-web-apis/intersection-observer';
import {
    TUI_DOC_CODE_ACTIONS,
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_EXAMPLE_TEXTS,
    TUI_DOC_ICONS,
} from '@taiga-ui/addon-doc/tokens';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoadRecord, tuiToKebab} from '@taiga-ui/addon-doc/utils';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {TuiNotificationService} from '@taiga-ui/core/components/notification';
import {TuiTitle} from '@taiga-ui/core/components/title';
import {TuiFullscreen} from '@taiga-ui/kit/components/fullscreen';
import {TuiSegmented} from '@taiga-ui/kit/components/segmented';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {TuiHeader} from '@taiga-ui/layout/components/header';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {BehaviorSubject, map, switchMap} from 'rxjs';

import {TuiDocCode} from '../code';
import {TUI_DOC_EXAMPLE_OPTIONS} from './example.options';
import {TuiDocExampleGetTabsPipe} from './example-get-tabs.pipe';

@Component({
    selector: 'tui-doc-example',
    imports: [
        AsyncPipe,
        NgComponentOutlet,
        PolymorpheusOutlet,
        RouterLink,
        TuiButton,
        TuiDocCode,
        TuiDocExampleGetTabsPipe,
        TuiFullscreen,
        TuiHeader,
        TuiLink,
        TuiLoader,
        TuiMapperPipe,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './example.template.html',
    styleUrl: './example.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        WaIntersectionObserverDirective,
        {
            directive: WaIntersectionObservee,
            outputs: ['waIntersectionObservee'],
        },
    ],
    host: {
        waIntersectionThreshold: '1',
        waIntersectionRootMargin: '-40px 0px 1000000% 0px',
        '[attr.id]': 'id()',
        '[class._fullsize]': 'fullsize()',
        '(waIntersectionObservee)': 'onIntersection()',
    },
})
export class TuiDocExample implements OnChanges {
    private readonly doc = inject(DOCUMENT);
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiNotificationService);
    private readonly location = inject(WA_LOCATION);
    private readonly copyTexts = inject(TUI_COPY_TEXTS);
    private readonly processContent = inject(TUI_DOC_EXAMPLE_CONTENT_PROCESSOR);
    private readonly rawLoader$$ = new BehaviorSubject<
        Record<string, TuiRawLoaderContent>
    >({});

    protected readonly fullscreenEnabled = inject(DOCUMENT).fullscreenEnabled;
    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly options = inject(TUI_DOC_EXAMPLE_OPTIONS);
    protected readonly texts = inject(TUI_DOC_EXAMPLE_TEXTS);
    protected readonly codeEditor = inject(TUI_DOC_CODE_EDITOR, {optional: true});
    protected readonly codeActions =
        inject<ReadonlyArray<PolymorpheusContent<TuiContext<string>>>>(
            TUI_DOC_CODE_ACTIONS,
        );

    protected readonly route = inject(ActivatedRoute);
    protected readonly defaultTab = this.texts[0];
    protected activeItemIndex = 0;
    protected fullscreen = false;
    protected readonly copy = computed(() => this.copyTexts()[0]);
    protected readonly loading = signal(false);
    protected readonly id = computed(() => tuiToKebab(this.heading()));
    protected readonly processor = toSignal(
        this.rawLoader$$.pipe(
            switchMap(tuiRawLoadRecord),
            map((value) => this.processContent(value)),
        ),
        {initialValue: {} as unknown as Record<string, string>},
    );

    public readonly heading = input('');
    public readonly description = input<PolymorpheusContent>();
    public readonly fullsize = input(inject(TUI_DOC_EXAMPLE_OPTIONS).fullsize);
    public readonly component = input<Promise<Type<unknown>>>();
    public readonly content = input<Record<string, TuiRawLoaderContent>>({});

    public ngOnChanges(): void {
        this.rawLoader$$.next(this.content());
    }

    protected readonly visible = (files: Record<string, string>): boolean =>
        Boolean(this.codeEditor && this.options.codeEditorVisibilityHandler(files));

    protected getTabTitle(fileName: string): PolymorpheusContent {
        return this.options.tabTitles.get(fileName) || fileName;
    }

    protected copyExampleLink(target: EventTarget | null): void {
        this.clipboard.copy((target as HTMLAnchorElement | null)?.href ?? '');
        this.alerts
            .open(this.texts[1], {label: this.texts[2], appearance: 'positive'})
            .subscribe();
    }

    protected edit(files: Record<string, string>): void {
        this.loading.set(true);
        this.codeEditor
            ?.edit(this.location.pathname.slice(1), this.id() || '', files)
            .finally(() => this.loading.set(false));
    }

    protected onIntersection(): void {
        this.doc.dispatchEvent(new CustomEvent('tui-example', {detail: this.id()}));
    }
}
