import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import type {AbstractControl, ValidatorFn} from '@angular/forms';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    tuiPure,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiError,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
    return ({value}: AbstractControl) => {
        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;

        return invalidTags.length > 0
            ? {
                  tags: new TuiValidationError('Some tags are invalid'),
              }
            : null;
    };
}

const ITEMS = ['The Midnight', 'FM-84', 'Timecop1983', 'GUNSHIP'];

function tagValidator(tag: string): boolean {
    return !/\d/.test(tag);
}

@Component({
    standalone: true,
    imports: [
        TuiInputTagModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListComponent,
        NgIf,
        NgForOf,
        TuiOptionComponent,
        TuiDataListDirective,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected search = '';

    protected readonly tagValidator = tagValidator;

    protected readonly control = new FormControl<string[]>(
        [],
        createControlValidator(tagValidator),
    );

    protected get filtered(): readonly string[] {
        return this.filterBy(this.search, this.control.value ?? []);
    }

    @tuiPure
    private filterBy(search: string, value: readonly string[]): readonly string[] {
        return ITEMS.filter(
            item => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),
        );
    }
}
