import {Component, ElementRef} from '@angular/core';
import {TuiButtonComponent} from '@taiga-ui/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
