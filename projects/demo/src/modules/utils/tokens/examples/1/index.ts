import {Component, Inject, Renderer2} from '@angular/core';
import {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-token-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiTokensExample1 {
    constructor(@Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2) {}

    style = this.renderer.createElement('style');
}
