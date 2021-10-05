import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    TuiBooleanHandler,
    tuiPure,
    TuiValidationError,
} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

function createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {
    return ({value}: AbstractControl) => {
        const invalidTags = !!value ? value.filter(handler) : EMPTY_ARRAY;

        return invalidTags.length > 0
            ? {
                  tags: new TuiValidationError('Some tags are invalid'),
              }
            : null;
    };
}

const ITEMS = ['The Midnight', 'FM-84', 'Timecop1983', 'GUNSHIP'];

@Component({
    selector: 'tui-input-tag-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputTagExample4 {
    search = '';

    readonly tagValidator = (tag: string) => !/\d/.test(tag);

    readonly control = new FormControl([], createControlValidator(this.tagValidator));

    get filtered(): readonly string[] {
        return this.filter(this.search, this.control.value);
    }

    @tuiPure
    private filter(search: string, value: readonly string[]): readonly string[] {
        return ITEMS.filter(
            item => TUI_DEFAULT_MATCHER(item, search) && value.indexOf(item) === -1,
        );
    }
}
