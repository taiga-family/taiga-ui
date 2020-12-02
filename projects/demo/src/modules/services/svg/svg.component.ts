import {default as injectService} from '!!raw-loader!./examples/inject-service.txt';

import {Component, Inject} from '@angular/core';
import {TuiSvgService} from '@taiga-ui/core';
import {tuiIconTrashLarge} from '@taiga-ui/icons';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-svg',
    templateUrl: './svg.template.html',
    changeDetection,
})
export class ExampleTuiSvgComponent {
    injectService = injectService;

    constructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {
        tuiSvgService.define({tuiIconTrashLarge});
    }
}
