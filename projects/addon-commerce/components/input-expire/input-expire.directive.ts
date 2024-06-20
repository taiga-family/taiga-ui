import type {OnInit} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';
import {TUI_MASK_EXPIRE} from '@taiga-ui/addon-commerce/constants';

@Directive({
    standalone: true,
    selector: 'input[tuiInputExpire]',
    hostDirectives: [MaskitoDirective],
    host: {
        inputmode: 'numeric',
        placeholder: '00/00',
        translate: 'no',
        '[autocomplete]': 'autocomplete ? "cc-exp" : "off"',
    },
})
export class TuiInputExpire implements OnInit {
    private readonly mask = inject(MaskitoDirective);

    @Input()
    public autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;

    public ngOnInit(): void {
        this.mask.options = TUI_MASK_EXPIRE;
        this.mask.ngOnChanges();
    }
}
