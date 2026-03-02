import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
`;export{o as default};
