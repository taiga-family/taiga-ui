import {Directive, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NG_VALIDATORS, type Validator} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DEFAULT_ERROR_MESSAGE, TUI_VALIDATION_ERRORS} from '@taiga-ui/core/tokens';
import {isObservable} from 'rxjs';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    private readonly default = inject(TUI_DEFAULT_ERROR_MESSAGE);
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
