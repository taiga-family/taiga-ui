import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPager} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiCarousel, TuiPager],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 2;
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
`;export{o as default};
