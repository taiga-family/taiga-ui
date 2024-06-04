import type {OnInit} from '@angular/core';
import {Directive, inject, Input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {TUI_INPUT_CARD_OPTIONS} from '@taiga-ui/addon-commerce/components/input-card';

const MASK = maskitoDateOptionsGenerator({
    mode: 'mm/yy',
    separator: '/',
});

@Directive({
    standalone: true,
    selector: 'input[tuiInputExpire]',
    host: {
        inputmode: 'numeric',
        placeholder: '00/00',
        translate: 'no',
        '[autocomplete]': 'autocomplete ? "cc-exp" : "off"',
    },
    hostDirectives: [MaskitoDirective],
})
export class TuiInputExpire implements OnInit {
    private readonly mask = inject(MaskitoDirective);

    @Input()
    public autocomplete = inject(TUI_INPUT_CARD_OPTIONS).autocomplete;

    public ngOnInit(): void {
        this.mask.options = MASK;
        this.mask.ngOnChanges();
    }
}
