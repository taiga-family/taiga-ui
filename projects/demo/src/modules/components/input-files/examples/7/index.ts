import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-files-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample7 {
    protected files: File[] = [];
    protected rejected: File[] = [];

    protected onRemove(remove: File): void {
        this.files = this.files.filter(file => file !== remove);
        this.rejected = this.rejected.filter(file => file !== remove);
    }

    protected onChange(files: File[]): void {
        this.files = files.filter(file => !this.rejected.includes(file));
    }

    protected onReject(rejected: File[]): void {
        this.rejected = rejected;
    }
}
