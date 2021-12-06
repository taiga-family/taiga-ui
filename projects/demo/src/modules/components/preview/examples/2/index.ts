import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {PreviewDialogService} from '@taiga-ui/addon-preview';
import {TuiDialogContext} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-preview-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPreviewExample2 {
    @ViewChild('preview')
    readonly preview?: TemplateRef<TuiDialogContext<void>>;

    constructor(
        @Inject(PreviewDialogService)
        private readonly previewDialogService: PreviewDialogService,
    ) {}

    show() {
        this.previewDialogService.open(this.preview || '').subscribe();
    }
}
