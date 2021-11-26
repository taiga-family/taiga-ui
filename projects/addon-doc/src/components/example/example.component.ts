import {Clipboard} from '@angular/cdk/clipboard';
import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {LOCATION} from '@ng-web-apis/common';
import {TuiHandler} from '@taiga-ui/cdk';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {CodeEditor} from '../../interfaces/code-editor';
import {TuiDocExample} from '../../interfaces/page';
import {TUI_DOC_CODE_EDITOR} from '../../tokens/code-editor';
import {TUI_DOC_EXAMPLE_CONTENT_PROCESSOR} from '../../tokens/example-content-processor';
import {TUI_DOC_EXAMPLE_TEXTS} from '../../tokens/i18n';
import {rawLoadRecord} from '../../utils/raw-load-record';

// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: 'tui-doc-example',
    templateUrl: './example.template.html',
    styleUrls: ['./example.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocExampleComponent {
    private readonly rawLoader$$ = new BehaviorSubject<TuiDocExample>({});

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

    activeItemIndex = 0;

    readonly defaultTab = this.texts[0];

    readonly copy$ = this.copyTexts$.pipe(map(([copy]) => copy));

    readonly processor$: Observable<Record<string, string>> = this.rawLoader$$.pipe(
        switchMap(rawLoadRecord),
        map(this.processContent),
    );

    constructor(
        @Attribute('id')
        readonly id: string | null,
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
        @Inject(LOCATION) private readonly location: Location,
        @Inject(TUI_COPY_TEXTS) private readonly copyTexts$: Observable<[string, string]>,
        @Inject(TUI_DOC_EXAMPLE_TEXTS) readonly texts: [string, string, string],
        @Optional()
        @Inject(TUI_DOC_CODE_EDITOR)
        readonly codeEditor: CodeEditor | null,
        @Inject(TUI_DOC_EXAMPLE_CONTENT_PROCESSOR)
        private readonly processContent: TuiHandler<
            Record<string, string>,
            Record<string, string>
        >,
    ) {}

    copyExampleLink() {
        const hashPosition = this.location.href.indexOf('#');
        const currentUrl =
            hashPosition > -1
                ? this.location.href.substr(0, hashPosition)
                : this.location.href;
        const url = `${currentUrl}#${this.id}`;

        this.clipboard.copy(url);
        this.notifications
            .show(this.texts[1], {
                label: this.texts[2],
                status: TuiNotification.Success,
            })
            .subscribe();
    }
}
