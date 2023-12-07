import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiToggleOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'tui-toggle-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiToggleOptionsProvider({
            icons: {
                toggleOff: ({$implicit}) =>
                    $implicit === 'm'
                        ? 'tuiIconChevronRight'
                        : 'tuiIconChevronRightLarge',
                toggleOn: ({$implicit}) =>
                    $implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge',
            },
            showIcons: true,
        }),
    ],
})
export class TuiToggleExample2 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(true),
        testValue2: new UntypedFormControl(false),
    });
}
