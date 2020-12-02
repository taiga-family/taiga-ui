import {Component, ViewChild} from '@angular/core';
import {TuiHostedDropdownComponent} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-hosted-dropdown-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample2 {
    readonly items = ['Изменить', 'Скачать', 'Переименовать', 'Удалить'];

    readonly selectItems = ['Выбор 1', 'Выбор 2'];

    open = false;

    selected = null;

    @ViewChild(TuiHostedDropdownComponent)
    component?: TuiHostedDropdownComponent;

    onClick() {
        this.open = false;

        if (this.component && this.component.nativeFocusableElement) {
            this.component.nativeFocusableElement.focus();
        }
    }
}
