import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

@Component({
    imports: [FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useFactory: () =>
                inject(TUI_LANGUAGE).pipe(
                    map(({name}) => ({
                        ...TUI_DEFAULT_NUMBER_FORMAT,
                        thousandSeparator: name === 'english' ? ',' : ' ',
                        decimalSeparator: name === 'english' ? '.' : ',',
                    })),
                ),
        },
    ],
})
export default class Example {
    protected value = 1234.56;
}
