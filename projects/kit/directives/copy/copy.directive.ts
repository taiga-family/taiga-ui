import {DOCUMENT} from '@angular/common';
import {computed, Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiHintDirective} from '@taiga-ui/core/directives/hint';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {TUI_COPY_OPTIONS} from './copy.options';

@Directive({
    standalone: true,
    selector: 'tui-icon[tuiCopy]',
    providers: [
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'icon'},
        },
    ],
    hostDirectives: [
        TuiWithAppearance,
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance', 'tuiHintContext'],
        },
    ],
    host: {
        style: 'cursor: pointer',
        '(click)': 'copy()',
        '[style.pointer-events]': 'disabled ? "none" : null',
        '[style.opacity]': 'disabled ? "var(--tui-disabled-opacity)" : null',
        '[style.border-width.rem]': 'textfield.options.size() === "l" ? null : 0.25',
    },
})
export class TuiCopyDirective {
    private readonly options = inject(TUI_COPY_OPTIONS);
    private readonly copied$ = new Subject<void>();
    private readonly doc = inject(DOCUMENT);

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly hint = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        toSignal(
            inject(TUI_COPY_TEXTS).pipe(
                switchMap(([copy, copied]) =>
                    this.copied$.pipe(
                        switchMap(() =>
                            timer(3000).pipe(
                                map(() => copy),
                                startWith(copied),
                            ),
                        ),
                        startWith(copy),
                    ),
                ),
            ),
            {initialValue: ''},
        ),
    );

    protected readonly icons = tuiDirectiveBinding(
        TuiIcon,
        'icon',
        computed((size = this.textfield.options.size()) =>
            tuiIsString(this.options.icon) ? this.options.icon : this.options.icon(size),
        ),
    );

    @Input()
    public tuiCopy = '';

    protected get disabled(): boolean {
        return !this.textfield.input?.nativeElement.value;
    }

    protected copy(): void {
        this.textfield.input?.nativeElement.select();
        this.doc.execCommand('copy');
        this.copied$.next();
    }
}
