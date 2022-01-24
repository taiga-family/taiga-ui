import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-files-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample4 {
    height = 3;
    readonly control = new FormControl();

    readonly files: ReadonlyArray<TuiFileLike> = [
        {
            name: 'Loaded.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'one_more_file.txt',
        },
        {
            name: 'last_file.txt',
        },
    ];

    readonly rejectedFiles: ReadonlyArray<TuiFileLike> = [
        {
            name: 'File with an error.txt',
        },
    ];
}
