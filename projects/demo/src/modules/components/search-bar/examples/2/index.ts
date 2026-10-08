import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiButtonClose, TuiSearchBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'android'}],
    host: {'[attr.data-platform]': '"android"'},
})
export default class Example {
    protected readonly query = new FormControl('');
}
