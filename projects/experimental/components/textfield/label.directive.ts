import {Directive, ElementRef, HostBinding, inject} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiLabelComponent} from './label.component';
import {TuiTextfieldComponent} from './textfield.component';

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
    protected get for(): string | undefined {
        return this.el.htmlFor || this.textfield?.id;
    }
}
