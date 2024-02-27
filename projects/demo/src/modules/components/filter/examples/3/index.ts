import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];

    protected form = new FormGroup({
        filters: new FormControl<string[]>([]),
    });

    protected getItemIcon(title: string): string {
        return getIcon[title];
    }
}
