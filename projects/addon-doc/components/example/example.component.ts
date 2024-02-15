import {Clipboard} from '@angular/cdk/clipboard';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {LOCATION} from '@ng-web-apis/common';
import {TuiDocExample} from '@taiga-ui/addon-doc/interfaces';
import {
    TUI_DOC_CODE_ACTIONS,
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_EXAMPLE_TEXTS,
} from '@taiga-ui/addon-doc/tokens';
import {tuiRawLoadRecord} from '@taiga-ui/addon-doc/utils';
import {TUI_IS_E2E, TuiContext} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, map, Observable, Subject, switchMap} from 'rxjs';

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
    protected readonly options = inject(TUI_DOC_EXAMPLE_OPTIONS);

    @Input()
    id: string | null = null;

    @Input()
    heading: PolymorpheusContent;

    @Input()
    description: PolymorpheusContent;

    @Input()
    set content(content: TuiDocExample) {
        this.rawLoader$$.next(content);
    }

    @Input()
    @HostBinding('class._fullsize')
    fullsize = this.options.fullsize;

    @Input()
    componentName: string = this.location.pathname.slice(1);

    readonly texts = inject(TUI_DOC_EXAMPLE_TEXTS);
    readonly codeEditor = inject(TUI_DOC_CODE_EDITOR, {optional: true});
    readonly isE2E = inject(TUI_IS_E2E);
    readonly codeActions =
        inject<ReadonlyArray<PolymorpheusContent<TuiContext<string>>>>(
            TUI_DOC_CODE_ACTIONS,
        );

    readonly defaultTabIndex = 0;

    readonly defaultTab = this.texts[this.defaultTabIndex];

    activeItemIndex = this.defaultTabIndex;

    readonly copy$ = this.copyTexts$.pipe(map(([copy]) => copy));

    readonly processor$: Observable<Record<string, string>> = this.rawLoader$$.pipe(
        switchMap(tuiRawLoadRecord),
        map(value => this.processContent(value)),
    );

    readonly loading$ = new Subject<boolean>();

    readonly visible = (files: Record<string, string>): boolean =>
        Boolean(this.codeEditor && this.options.codeEditorVisibilityHandler(files));

    getTabTitle(fileName: string): PolymorpheusContent {
        return this.options.tabTitles.get(fileName) || fileName;
    }

    copyExampleLink({href}: HTMLAnchorElement): void {
        this.clipboard.copy(href);
        this.alerts
            .open(this.texts[1], {label: this.texts[2], status: 'success'})
            .subscribe();
    }

    edit(files: Record<string, string>): void {
        this.loading$.next(true);
        this.codeEditor
            ?.edit(this.componentName, this.id || '', files)
            // TODO: replace lines below with `finally` when we bump Firefox to 58+
            // TODO: Add `es2018.promise` to `tsconfig.json` => `compilerOptions.lib`.
            .then(() => this.loading$.next(false))
            .catch(() => this.loading$.next(false));
    }
}
