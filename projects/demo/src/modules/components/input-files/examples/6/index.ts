import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-files-example-6`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputFilesExample6 {
    readonly control = new FormControl();

    removeFile(): void {
        this.control.setValue(null);
    }
}
