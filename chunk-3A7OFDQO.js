import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHovered} from '@taiga-ui/cdk';
import {TuiBadge, TuiPresent} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiHovered, TuiPresent],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected counterCSS = 0;

    protected counterIf = 0;

    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }

    protected onCSS(visible: boolean): void {
        this.counterCSS += visible ? 1 : -1;
    }

    protected onIf(visible: boolean): void {
        this.counterIf += visible ? 1 : -1;
    }
}
`;export{t as default};
