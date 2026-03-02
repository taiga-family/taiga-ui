import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiFade} from '@taiga-ui/kit';
import {TuiBlockDetails} from '@taiga-ui/layout';

@Component({
    imports: [TuiAmountPipe, TuiAvatar, TuiBadge, TuiBlockDetails, TuiFade, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({sign: 'always'})],
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
`;export{t as default};
