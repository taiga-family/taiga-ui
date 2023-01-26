import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, Self} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {AbstractTuiEditorResizable} from '@taiga-ui/addon-editor/components/editor-resizable';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {
    TUI_IFRAME_EDITOR_OPTIONS,
    TuiEditableIframe,
    TuiEditableIframeOptions,
} from './iframe-editor.options';

@Component({
    selector: 'tui-iframe-editor',
    templateUrl: './iframe-editor.component.html',
    styleUrls: ['./iframe-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiIframeEditorComponent extends AbstractTuiEditorResizable {
    get attrs(): TuiEditableIframe {
        return (this.node?.attrs as unknown as TuiEditableIframe) || {src: ''};
    }

    get src(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src ?? '');
    }

    get width(): number | string | null {
        return this._width || this.attrs.width || null;
    }

    get height(): number | string | null {
        return this._height || this.attrs.height || null;
    }

    constructor(
        @Inject(TUI_IFRAME_EDITOR_OPTIONS) readonly options: TuiEditableIframeOptions,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
    ) {
        super(documentRef, destroy$);
    }

    updateSize([width, height]: readonly [width: number, height: number]): void {
        this._width = Math.max(
            this.options.minWidth,
            Math.min(this.options.maxWidth, width),
        );

        this._height = Math.max(
            this.options.minHeight,
            Math.min(this.options.maxHeight, height),
        );
    }
}
