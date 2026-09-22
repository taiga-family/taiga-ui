import {Directive, inject, INJECTOR, type OnInit} from '@angular/core';
import {NG_VALIDATORS, NgControl} from '@angular/forms';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidatorRefresh, true)],
    host: {'(blur)': 'onChange()', '(input)': 'onInput()'},
})
export class TuiUnfinishedValidatorRefresh extends TuiValidator implements OnInit {
    private readonly injector = inject(INJECTOR);
    private readonly element = tuiInjectElement<HTMLInputElement>();
    private control: (NgControl & {field?: unknown}) | null = null;

    public ngOnInit(): void {
        this.control = this.injector.get(NgControl, null, {optional: true, self: true});
    }

    protected onInput(): void {
        if (
            this.control?.field || // Signal forms have nothing else to re-validate them, so they are always asked
            // Reactive forms has silent `updateValueAndValidity({emitEvent: false})` (not compatible with signal forms) inside control components
            this.control?.control?.value !== null ||
            this.element.value === ''
        ) {
            this.onChange();
        }
    }
}
