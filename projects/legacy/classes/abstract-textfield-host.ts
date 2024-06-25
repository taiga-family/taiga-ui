import {Directive, inject} from '@angular/core';
import type {TuiTextfieldHost} from '@taiga-ui/legacy/tokens';

import {AbstractTuiControl} from './control';

/**
 * @deprecated: drop in v5.0
 */
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
