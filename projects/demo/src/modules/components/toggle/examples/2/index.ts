import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
    ToggleOptions,
    TUI_TOGGLE_DEFAULT_OPTIONS,
    TUI_TOGGLE_OPTIONS,
} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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
