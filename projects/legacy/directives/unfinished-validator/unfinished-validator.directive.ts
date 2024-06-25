import {Directive, inject, INJECTOR} from '@angular/core';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/legacy/tokens';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    standalone: true,
    selector: '[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    private readonly injector = inject(INJECTOR);

    public readonly validate = tuiCreateUnfinishedValidator(
        () => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR),
        tuiInjectElement().getAttribute('tuiUnfinishedValidator') || '',
    );
}
