import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, InjectionToken} from '@angular/core';
import {TuiNodeViewNgComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import type {TuiEditableImage} from './image-editor.extension';

export const TUI_EDITOR_MIN_IMAGE_WIDTH = new InjectionToken<number>(
    `[TUI_EDITOR_MIN_IMAGE_WIDTH]: Min size of resizable image inside editor`,
    {
        factory: () => 100,
    },
);

export const TUI_EDITOR_MAX_IMAGE_WIDTH = new InjectionToken<number>(
    `[TUI_EDITOR_MAX_IMAGE_WIDTH]: Max size of resizable image inside editor`,
    {
        factory: () => Infinity,
    },
);

@Component({
    selector: `tui-image-editor`,
    templateUrl: `./image-editor.component.html`,
    styleUrls: [`./image-editor.component.less`],
    providers: [TuiDestroyService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditorComponent extends TuiNodeViewNgComponent {
    private _width = 0;

    get attrs(): TuiEditableImage {
        return (this.node?.attrs as TuiEditableImage) || {src: ``};
    }

    get src(): string {
        return this.attrs.src;
    }

    get width(): number {
        return this._width || this.attrs.width || 0;
    }

    get alt(): string {
        return this.attrs.alt || ``;
    }

    get title(): string {
        return this.attrs.title || ``;
    }

    constructor(
        @Inject(TUI_EDITOR_MIN_IMAGE_WIDTH) readonly minWidth: number,
        @Inject(TUI_EDITOR_MAX_IMAGE_WIDTH) readonly maxWidth: number,
        @Inject(DOCUMENT) readonly documentRef: Document,
        @Inject(TuiDestroyService) readonly destroy$: TuiDestroyService,
    ) {
        super();

        merge(
            tuiTypedFromEvent(this.documentRef, `touchend`),
            tuiTypedFromEvent(this.documentRef, `mouseup`),
        )
            .pipe(takeUntil(destroy$))
            .subscribe(() => this.updateAttributes({width: this.width}));
    }

    onHorizontalDrag([x]: readonly [number, number], direction: number): void {
        this._width = Math.max(
            this.minWidth,
            Math.min(this.maxWidth, this.width + direction * x),
        );
    }
}
