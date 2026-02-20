import"./chunk-HU6DUUP4.js";var n=`import {Component, ElementRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElement} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiElement],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLink(component: unknown): boolean {
        return component instanceof TuiAvatar;
    }

    protected isElement(element: unknown): boolean {
        return element instanceof ElementRef;
    }
}
`;export{n as default};
