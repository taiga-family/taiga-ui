import {Directive, inject} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

@Directive()
export abstract class AbstractTuiTextfieldHost<T extends AbstractTuiControl<any>>
    implements TuiTextfieldHost
{
    protected readonly host: T = inject<any>(AbstractTuiControl, {optional: true});

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

    get inputMode(): TuiTextfieldHost['inputMode'] {
        return 'text';
    }

    get value(): string {
        return this.host.value?.toString() || '';
    }

    abstract onValueChange(value: string): void;

    process(_input: HTMLInputElement): void {}
}
