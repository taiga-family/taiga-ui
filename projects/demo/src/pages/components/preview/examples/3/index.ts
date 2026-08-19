import {Component, inject, type TemplateRef, viewChild} from '@angular/core';
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

    protected readonly preview = viewChild<TemplateRef<TuiDialogContext>>('preview');

    protected show(): void {
        this.previewDialogService.open(this.preview() || '').subscribe();
    }
}
