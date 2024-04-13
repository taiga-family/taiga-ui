import {Component, ElementRef} from '@angular/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-element-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiElementExample1 {
    protected isLink(component: unknown): boolean {
        return component instanceof TuiAvatarComponent;
    }

    protected isElement(element: unknown): boolean {
        return element instanceof ElementRef;
    }
}
