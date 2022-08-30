import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSvgService} from '@taiga-ui/core';
import {tuiIconTrashLarge} from '@taiga-ui/icons';

@Component({
    selector: `example-tui-svg`,
    templateUrl: `./svg.template.html`,
    changeDetection,
})
export class ExampleTuiSvgComponent {
    injectService = import(`./examples/inject-service.md?raw`);

    constructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {
        tuiSvgService.define({tuiIconTrashLarge});
    }
}
