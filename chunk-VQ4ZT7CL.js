import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile, TuiFilePipe} from '@taiga-ui/experimental';

@Component({
    imports: [FormsModule, TuiButtonX, TuiFile, TuiFilePipe, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly files = signal<readonly File[]>([]);

    protected select(files: FileList | null): void {
        this.files.set(Array.from(files || []));
    }

    protected remove(file: File): void {
        this.files.update((files) => files.filter((f) => f !== file));
    }
}
`;export{t as default};
