import {Directive} from '@angular/core';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    standalone: true,
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    public readonly validate = tuiCreateUnfinishedValidator(
        tuiInjectElement(),
        tuiInjectElement().getAttribute('tuiUnfinishedValidator') || '',
    );
}
