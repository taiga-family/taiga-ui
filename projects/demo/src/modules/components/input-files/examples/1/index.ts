import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiFileLike} from '@taiga-ui/kit';
import {Subject} from 'rxjs';

@Component({
    selector: `tui-input-files-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample1 {
    readonly control = new FormControl();
    readonly rejectedFiles$ = new Subject<TuiFileLike | null>();

    onReject(file: TuiFileLike | readonly TuiFileLike[]): void {
        this.rejectedFiles$.next(file as TuiFileLike);
    }

    removeFile(): void {
        this.control.setValue(null);
    }

    clearRejected(): void {
        this.rejectedFiles$.next(null);
    }
}
