import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularNodeViewComponent} from '@taiga-ui/addon-editor/extensions/tiptap-node-view';
import {TuiEditableImage} from './image-editor.extension';

@Component({
    selector: 'tui-image-editor',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiImageEditorComponent extends AngularNodeViewComponent {
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

    onHorizontalDrag([x]: [number, number]) {
        this.updateAttributes({
            width: this.width + x,
        });
    }
}
