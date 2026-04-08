import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFiles, tuiFilesAccepted, tuiInputFilesOptionsProvider} from '@taiga-ui/kit';
import {map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, ReactiveFormsModule, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputFilesOptionsProvider({
            accept: '.jpeg, .jpg, .png, .pdf, .doc, .docx, .zip, .tif',
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl([
        new File(['mock zip content'], 'valid.zip', {type: 'application/zip'}),
        new File(['Lorem ipsum'], 'wrong.txt', {type: 'application/txt'}),
    ]);

    protected readonly accepted$ = this.control.valueChanges.pipe(
        startWith(this.control.value),
        map(() => tuiFilesAccepted(this.control)),
    );

    protected rejected: readonly File[] = [];

    protected onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    protected onRemove(file: File): void {
        this.rejected = this.rejected.filter((current) => current !== file);
        this.control.setValue(
            this.control.value?.filter((current) => current !== file) ?? [],
        );
    }
}
