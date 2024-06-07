import type {OnChanges, OnInit} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';
import {TUI_MASK_CVC} from '@taiga-ui/addon-commerce/constants';

@Directive({
    standalone: true,
    selector: 'input[tuiInputCVC]',
    host: {
        inputmode: 'numeric',
        '[autocomplete]': 'autocomplete ? "cc-csc" : "off"',
        '[placeholder]': '"0".repeat(length)',
        '[style.-webkit-text-security]': 'hidden ? "disc" : null',
        '(copy.prevent)': '(0)',
    },
    hostDirectives: [MaskitoDirective],
})
export class TuiInputCVC implements OnInit, OnChanges {
    private readonly mask = inject(MaskitoDirective);

    @Input()
    public autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;

    @Input()
    public hidden = true;

    @Input()
    public length: 3 | 4 = 3;

    public ngOnInit(): void {
        this.refresh();
    }

    public ngOnChanges(): void {
        this.refresh();
    }

    private refresh(): void {
        this.mask.options = TUI_MASK_CVC(this.length);
        this.mask.ngOnChanges();
    }
}
