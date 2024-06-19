import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import type {TuiFileLike} from '@taiga-ui/kit';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiFiles, NgForOf, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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
