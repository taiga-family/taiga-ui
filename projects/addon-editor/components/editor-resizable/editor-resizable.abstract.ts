import {Directive} from '@angular/core';
import {TuiNodeViewNgComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

export interface TuiEditorResizableContainer {
    width?: number | string | null;
    height?: number | string | null;
}

@Directive()
export abstract class AbstractTuiEditorResizable<
    T extends TuiEditorResizableContainer,
> extends TuiNodeViewNgComponent {
    protected _height = 0;
    protected _width = 0;

    constructor(documentRef: Document, destroy$: TuiDestroyService) {
        super();

        merge(
            tuiTypedFromEvent(documentRef, `touchend`),
            tuiTypedFromEvent(documentRef, `mouseup`),
        )
            .pipe(takeUntil(destroy$))
            .subscribe(() =>
                this.updateAttributes({width: this.width, height: this.height}),
            );
    }

    get attrs(): T {
        return (this.node?.attrs as T) || {src: ``};
    }

    get width(): number | string | null {
        return this._width || this.attrs.width || null;
    }

    get height(): number | string | null {
        return this._height || this.attrs.height || null;
    }

    abstract updateSize([width, height]: readonly [width: number, height: number]): void;
}
