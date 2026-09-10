import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';

@Component({
    imports: [TuiSearchBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'ios'}],
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {}
