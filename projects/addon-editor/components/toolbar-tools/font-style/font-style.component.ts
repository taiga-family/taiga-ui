import {ChangeDetectionStrategy, Component, Inject, Input, NgZone} from '@angular/core';
import {
    defaultEditorTools,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorTool,
    TuiTiptapEditorService,
} from '@taiga-ui/addon-editor';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {tuiZoneOptimized} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-style',
    templateUrl: './font-style.template.html',
    styleUrls: ['./font-style.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent {
    @Input()
    enabledTools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;
    readonly fontStyleState$ = combineLatest([
        this.getActiveStatus('bold'),
        this.getActiveStatus('italic'),
        this.getActiveStatus('underline'),
        this.getActiveStatus('strike'),
    ]).pipe(
        map(([bold, italic, underline, strikeThrough]) => ({
            bold,
            italic,
            underline,
            strikeThrough,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {}

    getActiveStatus(status: string): Observable<boolean> {
        return this.editor.stateChange$.pipe(
            map(() => this.editor.isActive(status)),
            distinctUntilChanged(),
            tuiZoneOptimized(this.ngZone),
        );
    }

    isEnabled(tool: TuiEditorTool): boolean {
        return this.enabledTools.includes(tool);
    }
}
