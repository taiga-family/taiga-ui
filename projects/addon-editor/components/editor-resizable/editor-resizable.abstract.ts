import {Directive} from '@angular/core';
import {TuiNodeViewNgComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {merge} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive()
export abstract class AbstractTuiEditorResizable extends TuiNodeViewNgComponent {
    protected _height = 0;
    protected _width = 0;

    protected constructor(documentRef: Document, destroy$: TuiDestroyService) {
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

    abstract get width(): number | string | null;
    abstract get height(): number | string | null;
    abstract updateSize([width, height]: readonly [width: number, height: number]): void;
}
