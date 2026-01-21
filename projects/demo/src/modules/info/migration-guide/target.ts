import {Directive, inject, type OnInit} from '@angular/core';
import {WA_LOCATION} from '@ng-web-apis/common';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TuiAccordionComponent, TuiAccordionDirective} from '@taiga-ui/kit';

@Directive({
    selector: '[tuiAccordionTarget]',
    host: {'(click)': 'onClick()'},
})
export class TuiAccordionTarget implements OnInit {
    private readonly el = tuiInjectElement();
    private readonly component = inject(TuiAccordionComponent);
    private readonly directive = inject(TuiAccordionDirective);
    private readonly location = inject(WA_LOCATION);

    public ngOnInit(): void {
        this.directive.open.set(`#${this.el.id}` === this.location.hash);
        this.component.toggle(this.directive);
    }

    public onClick(): void {
        this.location.hash = this.el.id;
    }
}
