import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiElasticContainer, TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiElasticContainer, TuiGroup, TuiSlides, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['First slide ', 'Second slide ', 'Third slide '];

    protected index = 0;
}
`;export{i as default};
