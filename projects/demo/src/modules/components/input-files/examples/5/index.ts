import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import type {TuiFileLike} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-files-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample5 {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly file: TuiFileLike = {
        name: 'custom.txt',
    };
}
