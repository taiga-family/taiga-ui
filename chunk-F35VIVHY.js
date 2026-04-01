import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_ANDROID} from '@ng-web-apis/platform';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isAndroid = inject(WA_IS_ANDROID);
}
`;export{t as default};
