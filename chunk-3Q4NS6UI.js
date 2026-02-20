import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    ReactiveFormsModule,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFiles, tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [AsyncPipe, ReactiveFormsModule, TuiError, TuiFiles],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);
    protected readonly accepted$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    protected rejected: readonly File[] = [];

    protected onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    protected onRemove(file: File): void {
        this.rejected = this.rejected.filter((rejected) => rejected !== file);
        this.control.setValue(
            this.control.value?.filter((current) => current !== file) ?? [],
        );
    }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
    return ({value}: AbstractControl) =>
        value.length > maxLength
            ? {
                  maxLength: new TuiValidationError(
                      'Error: maximum limit - 5 files for upload',
                  ),
              }
            : null;
}
`;export{o as default};
