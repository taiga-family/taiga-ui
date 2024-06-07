import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TUI_DIALOGS, TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiLinkDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly dialogs = inject(TUI_DIALOGS);
    protected readonly routes = DemoRoute;
}
