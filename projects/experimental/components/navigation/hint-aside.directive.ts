import {Directive, DoCheck, ElementRef, Inject} from '@angular/core';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core';

import {TuiAsideComponent} from './aside.component';

@Directive({
    selector: '[tuiHint][tuiHintAside]',
    providers: [tuiHintOptionsProvider({direction: 'right'})],
})
export class TuiHintAsideDirective implements DoCheck {
    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiAsideComponent) private readonly aside: TuiAsideComponent,
        @Inject(TuiHintDirective) private readonly hint: TuiHintDirective<any>,
    ) {}

    ngDoCheck(): void {
        this.hint.tuiHint = this.aside.tuiNavigationAside
            ? ''
            : this.el.nativeElement.textContent?.trim();
    }
}
