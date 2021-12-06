import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    ToggleOptions,
    TUI_TOGGLE_DEFAULT_OPTIONS,
    TUI_TOGGLE_OPTIONS,
} from '@taiga-ui/kit';

const options: Partial<ToggleOptions> = {
    icons: {
        toggleOff: ({$implicit}) =>
            $implicit === 'm' ? 'tuiIconChevronRight' : 'tuiIconChevronRightLarge',
        toggleOn: ({$implicit}) =>
            $implicit === 'm' ? 'tuiIconChevronLeft' : 'tuiIconChevronLeftLarge',
    },
    showIcons: true,
};

@Component({
    selector: 'tui-toggle-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_TOGGLE_OPTIONS,
            useValue: {
                ...TUI_TOGGLE_DEFAULT_OPTIONS,
                ...options,
            },
        },
    ],
})
export class TuiToggleExample2 {
    testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
    });
}
