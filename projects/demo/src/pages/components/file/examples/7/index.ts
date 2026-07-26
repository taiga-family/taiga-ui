import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TUI_FILE_OPTIONS, TuiFiles} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAnimated, TuiButtonX, TuiFile, TuiFiles, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    protected readonly files = signal<readonly File[]>([]);

    protected remove(file: File): void {
        this.files.update((files) => files.filter((f) => f !== file));
    }
}
