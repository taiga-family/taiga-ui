import {Directive, Inject} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

@Directive()
export abstract class TuiAbstractTextfieldHost<T extends AbstractTuiControl<any>>
    implements TuiTextfieldHost
{
    constructor(@Inject(AbstractTuiControl) protected readonly host: T) {}

    get readOnly(): boolean {
        return this.host.readOnly;
    }

    get disabled(): boolean {
        return this.host.computedDisabled;
    }

    get invalid(): boolean {
        return this.host.computedInvalid;
    }

    get focusable(): boolean {
        return this.host.computedFocusable;
    }

    get value(): string {
        return String(this.host.value);
    }

    abstract onValueChange(value: string): void;

    process(_input: HTMLInputElement): void {}
}
