import {ChangeDetectionStrategy, Component, Inject, InjectionToken} from '@angular/core';
import {TuiNodeViewNgComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiEditableImage} from './image-editor.extension';

export const TUI_EDITOR_MIN_IMAGE_WIDTH = new InjectionToken<number>(
    'Min size of resizable image inside editor',
    {
        factory: () => 100,
    },
);

@Component({
    selector: 'tui-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditorComponent extends TuiNodeViewNgComponent {
    get attrs(): TuiEditableImage {
        return (this.node?.attrs as TuiEditableImage) || {src: ''};
    }

    get src(): string {
        return this.attrs.src;
    }

    get width(): number {
        return this.attrs.width || 0;
    }

    get alt(): string {
        return this.attrs.alt || '';
    }

    get title(): string {
        return this.attrs.title || '';
    }

    onHorizontalDrag([x]: [number, number], direction: number) {
        this.updateAttributes({
            width: Math.max(this.minWidth, this.width + direction * x),
        });
    }

    constructor(@Inject(TUI_EDITOR_MIN_IMAGE_WIDTH) private readonly minWidth: number) {
        super();
    }
}
