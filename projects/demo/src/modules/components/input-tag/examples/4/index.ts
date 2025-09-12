import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {
    type AbstractControl,
    FormControl,
    ReactiveFormsModule,
    type ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    type TuiBooleanHandler,
    tuiPure,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {TuiDataList, TuiError} from '@taiga-ui/core';
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
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiDataList,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
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
            (item) => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),
        );
    }
}
