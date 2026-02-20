import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider, TuiIcon} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiHintOptionsProvider({icon: '@tui.camera'})],
})
export default class Example {}
`;export{i as default};
