import {Component} from '@angular/core';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts';
import {sum} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-legend-item-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLegendItemExample1 {
    activeItemIndex: number | null = null;

    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly sum = sum(...this.value);
    readonly colorHandler = TUI_DEFAULT_COLOR_HANDLER;
    readonly labels = ['Супермаркеты', 'Рестораны', 'Распутство', 'Транспорт', 'Другое'];

    isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }

    onHover(index: number, hovered: boolean) {
        this.activeItemIndex = hovered ? index : null;
    }
}
