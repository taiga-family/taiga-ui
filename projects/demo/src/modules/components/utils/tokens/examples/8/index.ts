import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDocCode} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDocCode],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly provideObfuscateOptionToken = import(
        './provide-obfuscate-option-token.md?raw'
    );

    protected readonly routes = DemoRoute;
}
