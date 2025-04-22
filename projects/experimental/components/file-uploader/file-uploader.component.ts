import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-mode]': 'mode',
        '[attr.data-size]': 'size ?? "m"',
        '[class._dragged]': 'dragged()',
        '(dragover.capture)': 'dragged.set(true)',
        '(dragleave.capture)': 'dragged.set(false)',
    },
})
export class TuiFileUploader {
    protected dragged = signal(false);

    @Input()
    public mode: 'grid' | 'list' = 'grid';

    @Input()
    public size?: 'm' | 's' = 'm';
}
