import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiActiveZone, TuiAnimated, TuiButton, TuiSearchbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    protected readonly active = signal(false);

    protected cancel(input: HTMLInputElement): void {
        input.value = '';
        input.focus();
        input.blur();
    }
}
