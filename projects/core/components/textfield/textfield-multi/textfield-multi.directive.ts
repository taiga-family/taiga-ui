import {Directive} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, EMPTY, merge, switchMap, timer} from 'rxjs';

import {TuiTextfieldBase} from '../textfield.directive';
import {tuiAsTextfieldAccessor} from '../textfield-accessor';

@Directive({
    standalone: true,
    selector: 'input[tuiTextfieldMulti]',
    providers: [tuiAsTextfieldAccessor(TuiTextfieldMultiDirective)],
    host: {
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly',
        '(blur)': 'onBlur()',
    },
})
export class TuiTextfieldMultiDirective<T> extends TuiTextfieldBase<T> {
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

    protected onBlur(): void {
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
