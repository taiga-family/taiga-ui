import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiFileLike} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-files-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample5 {
    readonly control = new FormControl();

    readonly file: TuiFileLike = {
        name: `custom.txt`,
    };
}
