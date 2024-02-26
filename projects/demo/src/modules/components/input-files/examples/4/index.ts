import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-files-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample4 {
    protected height = 3;

    protected readonly files: readonly TuiFileLike[] = [
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

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {
            name: 'File with an error.txt',
        },
    ];
}
