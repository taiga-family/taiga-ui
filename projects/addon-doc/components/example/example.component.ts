import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {LOCATION} from '@ng-web-apis/common';
import type {TuiDocExample} from '@taiga-ui/addon-doc/interfaces';
import {
    TUI_DOC_CODE_ACTIONS,
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_EXAMPLE_TEXTS,
} from '@taiga-ui/addon-doc/tokens';
import {tuiRawLoadRecord} from '@taiga-ui/addon-doc/utils';
import type {TuiContext} from '@taiga-ui/cdk';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {BehaviorSubject, map, ReplaySubject, Subject, switchAll, switchMap} from 'rxjs';

import {TUI_DOC_EXAMPLE_OPTIONS} from './example.options';

@Component({
    selector: 'tui-doc-example',
    templateUrl: './example.template.html',
    styleUrls: ['./example.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocExampleComponent {
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiAlertService);
    private readonly location = inject(LOCATION);
    private readonly copyTexts$ = inject(TUI_COPY_TEXTS);
    private readonly processContent = inject(TUI_DOC_EXAMPLE_CONTENT_PROCESSOR);
    private readonly rawLoader$$ = new BehaviorSubject<TuiDocExample>({});
    private readonly lazyLoader$$ = new ReplaySubject<Promise<{readonly default: any}>>(
        1,
    );

    @Input()
    public id: string | null = null;

    @Input()
    public heading: PolymorpheusContent;

    @Input()
    public description: PolymorpheusContent;

    @Input()
    @HostBinding('class._fullsize')
    public fullsize = inject(TUI_DOC_EXAMPLE_OPTIONS).fullsize;

    @Input()
    public componentName: string = this.location.pathname.slice(1);

    protected readonly options = inject(TUI_DOC_EXAMPLE_OPTIONS);
    protected readonly texts = inject(TUI_DOC_EXAMPLE_TEXTS);
    protected readonly codeEditor = inject(TUI_DOC_CODE_EDITOR, {optional: true});
    protected readonly isE2E = inject(TUI_IS_E2E);
    protected readonly codeActions =
        inject<ReadonlyArray<PolymorpheusContent<TuiContext<string>>>>(
            TUI_DOC_CODE_ACTIONS,
        );

    protected readonly defaultTabIndex = 0;

    protected readonly defaultTab = this.texts[this.defaultTabIndex];

    protected activeItemIndex = this.defaultTabIndex;

    protected readonly copy$ = this.copyTexts$.pipe(map(([copy]) => copy));

    protected readonly processor$: Observable<Record<string, string>> =
        this.rawLoader$$.pipe(
            switchMap(tuiRawLoadRecord),
            map(value => this.processContent(value)),
        );

    protected readonly lazyComponent$ = this.lazyLoader$$.pipe(
        switchAll(),
        map(module => new PolymorpheusComponent(module.default)),
    );

    protected readonly loading$ = new Subject<boolean>();

    @Input()
    public set content(content: TuiDocExample) {
        this.rawLoader$$.next(content);
    }

    @Input()
    public set component(content: Promise<{readonly default: any}>) {
        this.lazyLoader$$.next(content);
    }

    protected readonly visible = (files: Record<string, string>): boolean =>
        Boolean(this.codeEditor && this.options.codeEditorVisibilityHandler(files));

    protected getTabTitle(fileName: string): PolymorpheusContent {
        return this.options.tabTitles.get(fileName) || fileName;
    }

    protected copyExampleLink({href}: HTMLAnchorElement): void {
        this.clipboard.copy(href);
        this.alerts
            .open(this.texts[1], {label: this.texts[2], status: 'success'})
            .subscribe();
    }

    protected edit(files: Record<string, string>): void {
        this.loading$.next(true);
        void this.codeEditor
            ?.edit(this.componentName, this.id || '', files)
            .finally(() => this.loading$.next(false));
    }
}
