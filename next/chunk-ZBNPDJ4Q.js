import"./chunk-42JZD6NG.js";var e=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
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
    protected readonly isMobile = inject(TUI_IS_MOBILE);
}
`;export{e as default};
