import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core';
import {TUI_LANGUAGE, type TuiLanguage} from '@taiga-ui/i18n';
import {type BehaviorSubject, map, type Observable, switchMap} from 'rxjs';

@Component({
    selector: 'tui-input-number-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            deps: [TUI_LANGUAGE],
            useFactory: (lang: BehaviorSubject<Observable<TuiLanguage>>) =>
                lang.pipe(
                    switchMap(lang => lang),
                    map(({name}) => ({
                        ...TUI_DEFAULT_NUMBER_FORMAT,
                        thousandSeparator: name === 'english' ? ',' : ' ',
                        decimalSeparator: name === 'english' ? '.' : ',',
                    })),
                ),
        },
    ],
})
export class TuiInputNumberExample7 {
    protected value = 1234.56;
}
