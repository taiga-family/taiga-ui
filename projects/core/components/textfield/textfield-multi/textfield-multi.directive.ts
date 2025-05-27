import type {OnChanges} from '@angular/core';
import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, EMPTY, merge, switchMap, timer} from 'rxjs';

import {TuiTextfieldBase} from '../textfield.directive';
import {tuiAsTextfieldAccessor} from '../textfield-accessor';
import {TuiTextfieldMultiComponent} from './textfield-multi.component';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfieldMulti]',
    providers: [tuiAsTextfieldAccessor(TuiTextfieldMultiDirective)],
    host: {
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly',
        '(blur)': 'onBlur($event.relatedTarget)',
    },
})
export class TuiTextfieldMultiDirective<T>
    extends TuiTextfieldBase<T>
    implements OnChanges
{
    protected readonly cdr = inject(ChangeDetectorRef);
    protected readonly textfieldMulti = inject(TuiTextfieldMultiComponent);

    protected update = timer(0)
        .pipe(
            switchMap(() =>
                merge(
                    this.control?.valueChanges || EMPTY,
                    this.control?.statusChanges?.pipe(distinctUntilChanged()) || EMPTY,
                ),
            ),
            distinctUntilChanged(),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.m.set(this.mode);
        });

    public override get mode(): string | null {
        if (this.readOnly) {
            return 'readonly';
        }

        if (this.invalid === false) {
            return 'valid';
        }

        if (
            this.invalid ||
            (this.control?.invalid && (this.control.dirty || this.control.touched))
        ) {
            return 'invalid';
        }

        return null;
    }

    public override ngOnChanges(): void {
        this.m.set(this.mode);
        this.cdr.detectChanges();
    }

    protected onBlur(relatedTarget: HTMLElement | null): void {
        if (relatedTarget?.closest('tui-textfield')) {
            return;
        }

        this.control?.control?.markAsTouched();
        this.m.set(this.mode);
    }
}

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiTextfieldMultiDirective,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
})
export class TuiWithTextfieldMulti {}
