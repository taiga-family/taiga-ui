import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {CSS} from '@ng-web-apis/common';

@Directive({
    selector: '[tuiBorderStart], [tuiBorderEnd]',
})
export class TuiBorderDirective {
    @Input('tuiBorderStart')
    @HostBinding('style.borderInlineStartWidth.rem')
    start = 0;

    @Input('tuiBorderEnd')
    @HostBinding('style.borderInlineEndWidth.rem')
    end = 0;

    readonly modern = this.css.supports('border-inline-start-width', '0');

    constructor(@Inject(CSS) private readonly css: any) {}

    @HostBinding('style.borderLeftWidth.rem')
    get oldStart(): number | null {
        return this.modern ? null : this.start;
    }

    @HostBinding('style.borderRightWidth.rem')
    get oldEnd(): number | null {
        return this.modern ? null : this.end;
    }
}
