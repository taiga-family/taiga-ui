import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {TuiDocAppearance} from '@demo/components/appearance';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiDocAppearance, TuiMessage],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Custom color',
        'With link',
        'Chat messages',
        'Inside cells',
    ];
}
`;export{t as default};
