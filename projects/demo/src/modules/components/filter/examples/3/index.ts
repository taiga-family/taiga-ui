import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

const getIcon: Record<string, string> = {
    Calendar: 'tuiIconCalendarLarge',
    Favorite: 'tuiIconStarLarge',
    Messages: 'tuiIconMessageSquareLarge',
    FAQ: 'tuiIconHelpCircleLarge',
    Settings: 'tuiIconSettingsLarge',
};

@Component({
    selector: 'tui-filter-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFilterExample3 {
    items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];

    form = new UntypedFormGroup({
        filters: new UntypedFormControl([]),
    });

    getItemIcon(title: string): string {
        return getIcon[title];
    }
}
