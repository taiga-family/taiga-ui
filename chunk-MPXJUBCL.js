import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {TuiDocHint} from '@demo/components/hint';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDemo, TuiDocHint, TuiHint],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected show = false;

    protected sayHi(): void {
        console.info('Hi all!');
    }
}
`;export{e as default};
