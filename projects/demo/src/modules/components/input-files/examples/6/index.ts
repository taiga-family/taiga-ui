import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiFileLike} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-files-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample6 {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected removeFile(): void {
        this.control.setValue(null);
    }
}
