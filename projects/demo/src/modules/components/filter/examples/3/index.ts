import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const getIcon: Record<string, string> = {
    Календарь: 'tuiIconCalendarLarge',
    Избранное: 'tuiIconStarLarge',
    Сообщения: 'tuiIconCommentLarge',
    FAQ: 'tuiIconHelpCircleLarge',
    Настройки: 'tuiIconSettings2Large',
};

@Component({
    selector: 'tui-filter-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample3 {
    items = ['Календарь', 'Избранное', 'Сообщения', 'FAQ', 'Настройки'];

    form = new FormGroup({
        filters: new FormControl([]),
    });

    getItemIcon(title: string): string {
        return getIcon[title];
    }
}
