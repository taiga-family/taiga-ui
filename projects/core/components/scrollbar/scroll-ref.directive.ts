import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ElementRef,
    inject,
    InjectionToken,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

export const SCROLL_REF_SELECTOR = '[tuiScrollRef]';

export const TUI_SCROLL_REF = new InjectionToken(ngDevMode ? 'TUI_SCROLL_REF' : '', {
    factory: () => new ElementRef(inject(DOCUMENT).documentElement),
});

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './scroll-ref.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-scroll-ref-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiScrollRef]',
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    host: {'data-tui-version': TUI_VERSION, tuiScrollRef: ''},
})
export class TuiScrollRef {
    protected readonly nothing = tuiWithStyles(Styles);
}
