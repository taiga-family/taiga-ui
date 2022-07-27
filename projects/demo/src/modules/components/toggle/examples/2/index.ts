import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiToggleOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: `tui-toggle-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiToggleOptionsProvider({
            icons: {
                toggleOff: ({$implicit}) =>
                    $implicit === `m`
                        ? `tuiIconChevronRight`
                        : `tuiIconChevronRightLarge`,
                toggleOn: ({$implicit}) =>
                    $implicit === `m` ? `tuiIconChevronLeft` : `tuiIconChevronLeftLarge`,
            },
            showIcons: true,
        }),
    ],
})
export class TuiToggleExample2 {
    testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
    });
}
