import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiActiveZone, TuiButton, TuiSearchbar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'android'}],
    host: {'[attr.data-platform]': '"android"'},
})
export default class Example {
    protected readonly active = signal(false);

    protected cancel(input: HTMLInputElement): void {
        input.value = '';
        input.focus();
        input.blur();
    }
}
