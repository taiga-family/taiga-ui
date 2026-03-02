import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPreview} from '@taiga-ui/kit';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusOutlet, TuiButton, TuiPreview],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected index = 0;
    protected length = 2;
    protected titles = ['pic_1.jpg', 'pic_2.jpg'];
    protected content = [
        'https://picsum.photos/600/500',
        'https://picsum.photos/500/600',
    ];
}
`;export{o as default};
