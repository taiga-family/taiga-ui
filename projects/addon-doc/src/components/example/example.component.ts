import {Clipboard} from '@angular/cdk/clipboard';
import {Location as NgLocation} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Input, Optional} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {TUI_IS_CYPRESS, TuiContextWithImplicit, TuiHandler} from '@taiga-ui/cdk';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {TuiCodeEditor} from '../../interfaces/code-editor';
import {TuiDocExample} from '../../interfaces/page';
import {TUI_DOC_CODE_ACTIONS} from '../../tokens/code-actions';
import {TUI_DOC_CODE_EDITOR} from '../../tokens/code-editor';
import {TUI_DOC_EXAMPLE_CONTENT_PROCESSOR} from '../../tokens/example-content-processor';
import {TUI_DOC_EXAMPLE_TEXTS} from '../../tokens/i18n';
import {tuiRawLoadRecord} from '../../utils/raw-load-record';
import {TUI_DOC_EXAMPLE_OPTIONS, TuiDocExampleOptions} from './example-options';

@Component({
    selector: 'tui-doc-example',
    templateUrl: './example.template.html',
    styleUrls: ['./example.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocExampleComponent {
    private readonly rawLoader$$ = new BehaviorSubject<TuiDocExample>({});

    @Input()
    id: string | null = null;

    @Input()
    heading: PolymorpheusContent = '';

    @Input()
    description: PolymorpheusContent = '';

    @Input()
    set content(content: TuiDocExample) {
        this.rawLoader$$.next(content);
    }

    @Input()
    componentName: string = this.location.pathname.slice(1);

    readonly defaultTabIndex = 0;

    readonly defaultTab = this.texts[this.defaultTabIndex];

    activeItemIndex = this.defaultTabIndex;

    readonly copy$ = this.copyTexts$.pipe(map(([copy]) => copy));

    readonly processor$: Observable<Record<string, string>> = this.rawLoader$$.pipe(
        switchMap(tuiRawLoadRecord),
        map(value => this.processContent(value)),
    );

    readonly loading$ = new Subject<boolean>();

    constructor(
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(LOCATION) private readonly location: Location,
        @Inject(TUI_COPY_TEXTS) private readonly copyTexts$: Observable<[string, string]>,
        @Inject(TUI_DOC_EXAMPLE_TEXTS) readonly texts: [string, string, string],
        @Optional()
        @Inject(TUI_DOC_CODE_EDITOR)
        readonly codeEditor: TuiCodeEditor | null,
        @Inject(TUI_DOC_EXAMPLE_CONTENT_PROCESSOR)
        private readonly processContent: TuiHandler<
            Record<string, string>,
            Record<string, string>
        >,
        @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,
        @Inject(TUI_DOC_CODE_ACTIONS)
        readonly codeActions: Array<PolymorpheusContent<TuiContextWithImplicit<string>>>,
        @Inject(Router) private readonly router: Router,
        @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
        @Inject(NgLocation) private readonly ngLocation: NgLocation,
        @Inject(TUI_DOC_EXAMPLE_OPTIONS) private readonly options: TuiDocExampleOptions,
    ) {}

    readonly visible = (files: Record<string, string>): boolean =>
        Boolean(this.codeEditor && this.options.codeEditorVisibilityHandler(files));

    copyExampleLink(): void {
        const hashPosition = this.location.href.indexOf('#');
        const currentUrl =
            hashPosition > -1
                ? this.location.href.slice(0, Math.max(0, hashPosition))
                : this.location.href;
        const url = `${currentUrl}#${this.id}`;

        this.setFragmentWithoutRedirect(this.id);
        this.clipboard.copy(url);
        this.alertService
            .open(this.texts[1], {
                label: this.texts[2],
                status: TuiNotification.Success,
            })
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

    private setFragmentWithoutRedirect(id: string | null): void {
        const url = this.router
            .createUrlTree([], {relativeTo: this.route, fragment: id || ''})
            .toString();

        this.ngLocation.go(url);
    }
}
