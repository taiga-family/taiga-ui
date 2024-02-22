import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-element-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiElementExample1 {
    public isButton(component: unknown): boolean {
        return component instanceof TuiButtonComponent;
    }

    public isElement(element: unknown): boolean {
        return element instanceof ElementRef;
    }
}
