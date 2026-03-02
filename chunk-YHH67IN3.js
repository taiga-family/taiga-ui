import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputCard, TuiSegmented, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected statuses = ['normal', 'disabled', 'readOnly', 'invalid'] as const;
    protected status: string = this.statuses[0];
    protected card = '1234123412341234';
    protected background =
        '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)';
}
`;export{a as default};
