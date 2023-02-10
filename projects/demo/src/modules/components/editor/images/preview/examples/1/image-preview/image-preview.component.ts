import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
    selector: 'image-preview-example',
    templateUrl: './image-preview.template.html',
    styleUrls: ['./image-preview.style.less'],
    changeDetection,
    encapsulation,
})
export class ImagePreviewExampleComponent {
    @ViewChild('previewImages')
    template?: TemplateRef<TuiDialogContext>;

    image?: HTMLImageElement;

    constructor(
        @Inject(TuiPreviewDialogService)
        private readonly dialogService: TuiPreviewDialogService,
    ) {}

    showImage(image: HTMLImageElement): void {
        this.image = image;
        this.dialogService.open(this.template || '').subscribe();
    }
}
