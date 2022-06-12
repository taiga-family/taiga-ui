import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    TuiBooleanHandler,
    tuiPure,
    TuiValidationError,
} from '@taiga-ui/cdk';

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
    selector: 'tui-input-tag-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputTagExample4 {
    search = '';

    readonly tagValidator = tagValidator;

    readonly control = new FormControl([], createControlValidator(tagValidator));

    get filtered(): readonly string[] {
        return this.filterBy(this.search, this.control.value);
    }

    @tuiPure
    private filterBy(search: string, value: readonly string[]): readonly string[] {
        return ITEMS.filter(
            item => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),
        );
    }
}
