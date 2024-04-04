import {Directive, ElementRef, inject, INJECTOR} from '@angular/core';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, tuiProvide} from '@taiga-ui/cdk';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    selector: '[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidatorDirective, true)],
})
export class TuiUnfinishedValidatorDirective implements Validator {
    private readonly injector = inject(INJECTOR);

    public readonly validate = tuiCreateUnfinishedValidator(
        () => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR),
        inject(ElementRef).nativeElement.getAttribute('tuiUnfinishedValidator') || '',
    );
}
