import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [AsyncPipe, FormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected files: File[] = [];
    protected rejected: File[] = [];

    protected onRemove(remove: File): void {
        this.files = this.files.filter((file) => file !== remove);
        this.rejected = this.rejected.filter((file) => file !== remove);
    }

    protected onChange(files: File[]): void {
        this.files = files.filter((file) => !this.rejected.includes(file));
    }

    protected onReject(rejected: File[]): void {
        this.rejected = rejected;
    }
}
`;export{i as default};
