import type {AfterViewInit} from '@angular/core';
import {Directive} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiIsInput} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {startWith} from 'rxjs';

import type {TuiInputPasswordComponent} from './input-password.component';

@Directive({
    selector: 'tui-input-password',
    providers: [tuiAsTextfieldHost(TuiInputPasswordDirective)],
})
export class TuiInputPasswordDirective
    extends AbstractTuiTextfieldHost<TuiInputPasswordComponent>
    implements AfterViewInit
{
    protected input?: HTMLInputElement;

    protected readonly isPasswordHidden$ = this.host.passwordHidden.pipe(
        startWith(this.host.inputType),
        takeUntilDestroyed(),
    );

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public override process(input: HTMLInputElement): void {
        this.input = input;
    }

    public ngAfterViewInit(): void {
        this.isPasswordHidden$.subscribe(() => {
            if (
                this.host.nativeFocusableElement &&
                tuiIsInput(this.host.nativeFocusableElement)
            ) {
                this.host.nativeFocusableElement.type = this.host.inputType;
            }
        });
    }
}
