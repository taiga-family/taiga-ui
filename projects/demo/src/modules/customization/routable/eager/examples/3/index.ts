import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiAddonDoc],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample3 {
    protected readonly html = import('../setup/html.md?raw');
    protected readonly routes = import('../setup/routes.md?raw');
}
