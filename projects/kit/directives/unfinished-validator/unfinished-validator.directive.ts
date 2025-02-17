import {Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    standalone: true,
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    private readonly default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    private readonly el = tuiInjectElement<HTMLInputElement>();

    @Input()
    public tuiUnfinishedValidator = '';

    public readonly validate = tuiCreateUnfinishedValidator(
        this.el,
        () => this.tuiUnfinishedValidator || this.default(),
    );
}
