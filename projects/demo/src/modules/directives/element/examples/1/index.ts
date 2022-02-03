import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-element-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiElementExample1 {
    isButton(component: any): boolean {
        return component instanceof TuiButtonComponent;
    }

    isElement(element: any): boolean {
        return element instanceof ElementRef;
    }
}
