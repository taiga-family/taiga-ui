import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: 'tui-editor-socket[imagePreview]',
    host: {class: '_preview-image'},
})
export class TuiEditorImagePreviewDirective {
    @Output()
    imagePreview = new EventEmitter<HTMLImageElement>();

    @HostListener('click', ['$event.target'])
    click(target: HTMLElement): void {
        if (target instanceof HTMLImageElement) {
            this.imagePreview.emit(target);
        }
    }
}
