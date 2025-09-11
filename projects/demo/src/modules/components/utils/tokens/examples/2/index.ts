import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isAndroid = inject(TUI_IS_ANDROID);
}
