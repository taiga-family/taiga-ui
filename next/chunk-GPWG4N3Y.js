import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiFilter} from '@taiga-ui/kit';

const getIcon: Record<string, string> = {
    Calendar: '@tui.calendar',
    Favorite: '@tui.star',
    Messages: '@tui.message-square',
    FAQ: '@tui.circle-help',
    Settings: '@tui.settings',
};

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];

    protected form = new FormGroup({filters: new FormControl<string[]>([])});

    protected getItemIcon(title: string): string {
        return getIcon[title] ?? '';
    }
}
`;export{o as default};
