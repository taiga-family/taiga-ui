import {Directive, inject} from '@angular/core';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

@Directive()
export abstract class AbstractTuiTextfieldHost<T extends AbstractTuiControl<any>>
    implements TuiTextfieldHost
{
    protected readonly host: T = inject<any>(AbstractTuiControl, {optional: true});

    public abstract onValueChange(value: string): void;

    public get readOnly(): boolean {
        return this.host.readOnly;
    }

    public get disabled(): boolean {
        return this.host.computedDisabled;
    }

    public get invalid(): boolean {
        return this.host.computedInvalid;
    }

    public get focusable(): boolean {
        return this.host.computedFocusable;
    }

    public get inputMode(): TuiTextfieldHost['inputMode'] {
        return 'text';
    }

    public get value(): string {
        return this.host.value?.toString() || '';
    }

    public process(_input: HTMLInputElement): void {}
}
