import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-files-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample2 {
    readonly control = new FormControl([]);
    rejectedFiles: ReadonlyArray<TuiFileLike> = [];

    onReject(files: ReadonlyArray<TuiFileLike>) {
        this.rejectedFiles = [...this.rejectedFiles, ...files];
    }

    removeFile(file: File) {
        this.control.setValue(
            this.control.value.filter((current: File) => current.name !== file.name),
        );
    }

    clearRejected(file: TuiFileLike) {
        this.rejectedFiles = this.rejectedFiles.filter(
            rejected => rejected.name !== file.name,
        );
    }
}
