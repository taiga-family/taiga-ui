import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiFiles, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected height = 3;

    protected readonly files: readonly TuiFileLike[] = [
        {name: 'Loaded.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'one_more_file.txt'},
        {name: 'last_file.txt'},
    ];

    protected readonly rejectedFiles: readonly TuiFileLike[] = [
        {name: 'File with an error.txt'},
    ];
}
`;export{i as default};
