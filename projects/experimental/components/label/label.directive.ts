import {Directive, ElementRef, HostBinding, inject} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {TuiTextfieldComponent} from '@taiga-ui/experimental/components/textfield';

import {TuiLabelComponent} from './label.component';

@Directive({
    standalone: true,
    selector: 'label[tuiLabel]',
})
export class TuiLabelDirective {
    // @ts-ignore
    private readonly nothing = tuiWithStyles(TuiLabelComponent);
    private readonly el: HTMLLabelElement = inject(ElementRef).nativeElement;
    private readonly textfield = inject(TuiTextfieldComponent, {optional: true});

    @HostBinding('attr.for')
    get for(): string | undefined {
        return this.el.htmlFor || this.textfield?.id;
    }
}
