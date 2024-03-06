import type {TemplateRef} from '@angular/core';
import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import type {TuiDialogContext} from '@taiga-ui/core';

@Component({
    selector: 'tui-preview-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPreviewExample2 {
    private readonly previewDialogService = inject(TuiPreviewDialogService);

    @ViewChild('preview')
    protected readonly preview?: TemplateRef<TuiDialogContext>;

    protected show(): void {
        this.previewDialogService.open(this.preview || '').subscribe();
    }
}
