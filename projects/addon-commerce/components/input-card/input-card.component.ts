import {Directive, inject, type OnInit} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {DefaultValueAccessor, NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CARD} from '@taiga-ui/addon-commerce/constants';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {distinctUntilChanged, map, skip, startWith, switchMap, timer} from 'rxjs';

import {TuiInputCardContent} from './input-card-content.component';

@Directive({
    selector: 'input[tuiInputCard]',
    providers: [tuiAsTextfieldContent(() => TuiInputCardContent)],
    hostDirectives: [MaskitoDirective, TuiWithInput, TuiTextfieldContent],
    host: {
        autocomplete: 'cc-number',
        inputmode: 'numeric',
        placeholder: '0000 0000 0000 0000',
    },
})
// TODO(v6): rename to TuiInputCardDirective
export class TuiInputCardComponent implements OnInit {
    private readonly control = inject(NgControl);

    private readonly accessor = inject(DefaultValueAccessor, {
        self: true,
        optional: true,
    });

    protected readonly mask = tuiMaskito(TUI_MASK_CARD);

    public readonly binChange = outputFromObservable(
        timer(0).pipe(
            switchMap(() => tuiControlValue<string>(this.control)),
            map((v) => (v.length < 6 ? null : v.replace(' ', '').slice(0, 6))),
            startWith(null),
            distinctUntilChanged(),
            skip(1),
        ),
    );

    public ngOnInit(): void {
        if (!this.accessor) {
            return;
        }

        const onChanges = this.accessor.onChange.bind(this.accessor);

        this.accessor.onChange = (value: string) =>
            onChanges(value.replaceAll(CHAR_NO_BREAK_SPACE, ''));
    }
}
