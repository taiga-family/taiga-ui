import {Directive, inject, INJECTOR, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_DEFAULT_ERROR_MESSAGE} from '@taiga-ui/core';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/legacy/tokens';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    standalone: true,
    selector: '[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
})
export class TuiUnfinishedValidator implements Validator {
    private readonly default = toSignal(inject(TUI_DEFAULT_ERROR_MESSAGE));
    private readonly injector = inject(INJECTOR);

    @Input()
    public tuiUnfinishedValidator = '';

    public readonly validate = tuiCreateUnfinishedValidator(
        () => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR),
        () => this.tuiUnfinishedValidator || this.default(),
    );
}
