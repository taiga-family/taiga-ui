import"./chunk-B4AJQJMI.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCopyProcessor} from '@taiga-ui/cdk';
import {TuiCopy} from '@taiga-ui/kit';

@Component({
    imports: [TuiCopy, TuiCopyProcessor],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly processor = (value: string): string => \` \${value} \`;
}
`;export{t as default};
