import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent} from '@taiga-ui/kit';

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
