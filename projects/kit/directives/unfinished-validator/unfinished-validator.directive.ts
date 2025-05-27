import {Directive, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core/tokens';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {isObservable} from 'rxjs';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    standalone: true,
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    private readonly default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    private readonly error = inject(TUI_VALIDATION_ERRORS)['tuiUnfinished'];
    private readonly fallback = this.error ? signal(this.error) : this.default;
    private readonly message = isObservable(this.error)
        ? toSignal(this.error)
        : this.fallback;

    @Input()
    public tuiUnfinishedValidator = '';

    public readonly validate = tuiCreateUnfinishedValidator(
        tuiInjectElement<HTMLInputElement>(),
        () => this.tuiUnfinishedValidator || this.message(),
    );
}
