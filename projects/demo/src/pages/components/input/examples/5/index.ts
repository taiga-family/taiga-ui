import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButtonX, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected clear(): void {
        console.info('The custom clear handler has been invoked');

        this.value = '';
    }
}
