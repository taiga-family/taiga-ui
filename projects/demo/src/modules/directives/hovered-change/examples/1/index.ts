import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHoveredDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiHoveredDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }
}
