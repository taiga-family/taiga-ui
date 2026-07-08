import {Directive, type OnInit} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiScrollRef} from './scroll-ref.directive';
import {TUI_SCROLLABLE} from './scrollbar.component';

@Directive({selector: '[tuiScrollable]', hostDirectives: [TuiScrollRef]})
export class TuiScrollable implements OnInit {
    private readonly el = tuiInjectElement();

    public ngOnInit(): void {
        this.el.dispatchEvent(
            new CustomEvent(TUI_SCROLLABLE, {bubbles: true, detail: this.el}),
        );
    }
}
