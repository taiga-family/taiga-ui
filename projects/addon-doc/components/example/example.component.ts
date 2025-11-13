import {Clipboard} from '@angular/cdk/clipboard';
import {AsyncPipe, DOCUMENT, NgComponentOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    input,
    signal,
    type Type,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {WA_LOCATION} from '@ng-web-apis/common';
import {
    TUI_DOC_CODE_ACTIONS,
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_EXAMPLE_TEXTS,
    TUI_DOC_ICONS,
} from '@taiga-ui/addon-doc/tokens';
import {type TuiRawLoaderContent} from '@taiga-ui/addon-doc/types';
import {tuiRawLoadRecord} from '@taiga-ui/addon-doc/utils';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {TuiAlertService} from '@taiga-ui/core/components/alert';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiLink} from '@taiga-ui/core/components/link';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {TuiFullscreen} from '@taiga-ui/kit/components/fullscreen';
import {TuiTabs} from '@taiga-ui/kit/components/tabs';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
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
        RouterLinkActive,
        TuiButton,
        TuiDocCode,
        TuiDocExampleGetTabsPipe,
        TuiFullscreen,
        TuiLink,
        TuiLoader,
        TuiMapperPipe,
        TuiTabs,
    ],
    templateUrl: './example.template.html',
    styleUrl: './example.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.id]': 'id()',
        '[class._fullsize]': 'fullsize()',
    },
})
export class TuiDocExample {
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiAlertService);
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

    protected readonly defaultTabIndex = 0;
    protected readonly defaultTab = this.texts[this.defaultTabIndex];
    protected activeItemIndex = this.defaultTabIndex;
    protected fullscreen = false;

    protected readonly copy = computed(() => this.copyTexts()[0]);

    protected readonly loading = signal(false);

    protected readonly processor = toSignal(
        this.rawLoader$$.pipe(
            switchMap(tuiRawLoadRecord),
            map((value) => this.processContent(value)),
        ),
        {initialValue: {} as unknown as Record<string, string>},
    );

    public readonly id = input<string | null>(null);

    public readonly heading = input<PolymorpheusContent>();

    public readonly description = input<PolymorpheusContent>();

    public readonly fullsize = input(inject(TUI_DOC_EXAMPLE_OPTIONS).fullsize);

    public readonly componentName = input<string>(this.location.pathname.slice(1));

    public readonly component = input<Promise<Type<unknown>>>();

    @Input()
    public set content(content: Record<string, TuiRawLoaderContent>) {
        this.rawLoader$$.next(content);
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
            ?.edit(this.componentName(), this.id() || '', files)
            .finally(() => this.loading.set(false));
    }
}
