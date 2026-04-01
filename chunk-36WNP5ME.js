import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiAvatar, TuiFiles, TuiIcon, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiFileLike | null>(null);

    protected readonly file: TuiFileLike = {name: 'custom.txt'};
}
`;export{i as default};
