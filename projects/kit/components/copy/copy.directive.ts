import {Clipboard} from '@angular/cdk/clipboard';
import {Directive, inject} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiHintDirective} from '@taiga-ui/core/portals/hint';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit/tokens';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {TUI_COPY_OPTIONS} from './copy.options';

@Directive({
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
        '[style.pointer-events]': 'hasValue ? null : "none"',
        '[style.opacity]': 'hasValue ? null : "var(--tui-disabled-opacity)"',
        '[style.border-width.rem]': 'textfield.options.size() === "l" ? null : 0.25',
    },
})
export class TuiCopyDirective {
    private readonly copied$ = new Subject<void>();
    private readonly clipboard = inject(Clipboard);
    private readonly stringify = inject(TUI_ITEMS_HANDLERS).stringify;

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly icons = tuiIconEnd(inject(TUI_COPY_OPTIONS).icon);
    protected readonly copyTexts = inject(TUI_COPY_TEXTS);
    protected readonly hint = tuiDirectiveBinding(
        TuiHintDirective,
        'content',
        toSignal(
            toObservable(inject(TUI_COPY_TEXTS)).pipe(
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

    protected get hasValue(): boolean {
        return this.multi
            ? !!this.textfield.control()?.value.length
            : !!this.textfield.value();
    }

    protected copy(): void {
        if (this.multi) {
            this.clipboard.copy(
                this.textfield.control()?.value.map(this.stringify()).join(', '),
            );
        } else {
            this.textfield.input()?.nativeElement.select();
            this.clipboard.copy(this.textfield.value());
        }

        this.copied$.next();
    }

    private get multi(): boolean {
        return Array.isArray(this.textfield.control()?.value);
    }
}
