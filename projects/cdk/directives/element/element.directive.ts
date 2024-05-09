import {Directive, ElementRef} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiElement]',
    exportAs: 'elementRef',
})
export class TuiElementDirective<T extends Element = HTMLElement>
    implements ElementRef<T>
{
    public nativeElement = tuiInjectElement<T>();

    constructor() {
        /**
         * @note:
         * Typically, when your constructor is invoked with new,
         * an object is created, its constructor is assigned to
         * the invoked constructor and the object is then assigned
         * to this before executing any operations specified
         * in your constructor method.
         *
         * ERROR TypeError: Class constructor ElementRef cannot be invoked without 'new'
         * https://github.com/taiga-family/taiga-ui/issues/3072
         *
         * This way we can instantiate object creation
         * without additional prototype chain for possible fix bug.
         */
        return new ElementRef<T>(this.nativeElement);
    }
}
