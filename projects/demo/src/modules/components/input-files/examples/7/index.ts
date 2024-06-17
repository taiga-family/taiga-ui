import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiFileComponent,
    TuiFileRejectedPipe,
    TuiFilesComponent,
    TuiInputFilesComponent,
    TuiInputFilesDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiInputFilesComponent,
        TuiInputFilesDirective,
        FormsModule,
        TuiFilesComponent,
        TuiFileComponent,
        NgForOf,
        TuiFileRejectedPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected files: File[] = [];
    protected rejected: File[] = [];

    protected onRemove(remove: File): void {
        this.files = this.files.filter(file => file !== remove);
        this.rejected = this.rejected.filter(file => file !== remove);
    }

    protected onChange(files: File[]): void {
        this.files = files.filter(file => !this.rejected.includes(file));
    }

    protected onReject(rejected: File[]): void {
        this.rejected = rejected;
    }
}
