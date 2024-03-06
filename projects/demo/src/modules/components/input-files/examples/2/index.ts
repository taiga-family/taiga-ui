import {Component} from '@angular/core';
import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {tuiFilesAccepted} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    selector: 'tui-input-files-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputFilesExample2 {
    protected readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);
    protected readonly accepted$ = this.control.valueChanges.pipe(
        map(() => tuiFilesAccepted(this.control)),
    );

    protected rejected: readonly File[] = [];

    protected onReject(files: readonly File[]): void {
        this.rejected = Array.from(new Set(this.rejected.concat(files)));
    }

    protected onRemove(file: File): void {
        this.rejected = this.rejected.filter(rejected => rejected !== file);
        this.control.setValue(
            this.control.value?.filter(current => current !== file) ?? [],
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
