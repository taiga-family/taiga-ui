import {Component, inject, Renderer2} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-token-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTokensExample1 {
    protected style = inject(Renderer2).createElement('style');
}
