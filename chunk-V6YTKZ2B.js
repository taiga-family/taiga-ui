import"./chunk-HU6DUUP4.js";var t=`import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, type TuiDialogContext} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiPreview],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewDialogService = inject(TuiPreviewDialogService);

    @ViewChild('preview')
    protected readonly preview?: TemplateRef<TuiDialogContext>;

    protected show(): void {
        this.previewDialogService.open(this.preview || '').subscribe();
    }
}
`;export{t as default};
