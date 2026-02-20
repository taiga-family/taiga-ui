import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHovered} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiHovered],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }
}
`;export{t as default};
