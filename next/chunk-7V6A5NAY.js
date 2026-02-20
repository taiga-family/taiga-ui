import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {
    TuiResponsiveDialog,
    type TuiResponsiveDialogOptions,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiButton, TuiLink, TuiResponsiveDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected open = false;

    protected readonly options: Partial<TuiResponsiveDialogOptions> = {
        label: 'Responsive',
        size: 's',
    };
}
`;export{t as default};
