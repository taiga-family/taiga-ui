import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElementDirective} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatarComponent, TuiElementDirective, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLink(component: unknown): boolean {
        return component instanceof TuiAvatarComponent;
    }

    protected isElement(element: unknown): boolean {
        return element instanceof ElementRef;
    }
}
