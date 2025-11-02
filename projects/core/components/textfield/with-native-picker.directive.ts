import {Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

/**
 * Use it instead of host binding
 * host: { '[type]': '"text"' }
 * ___
 * From Angular 19+ all effects are called before host bindings.
 * If effects inside `tuiValue` will be called before `<input />` get `type="text"`,
 * it will cause loss of initial value
 */
@Directive()
export class TuiWithNativePicker {
    constructor() {
        tuiInjectElement<HTMLInputElement>().type = 'text';
    }
}
