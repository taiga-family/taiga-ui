import {DOCUMENT} from '@angular/common';
import {Directive, inject, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiTextfieldComponent,
    tuiTextfieldIcon,
} from '@taiga-ui/core/components/textfield';
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
    private readonly copied$ = new Subject<void>();
    private readonly doc = inject(DOCUMENT);

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly icons = tuiTextfieldIcon(TUI_COPY_OPTIONS);
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
