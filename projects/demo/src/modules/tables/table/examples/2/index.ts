import {Component} from '@angular/core';
import {NgControl, ValidatorFn} from '@angular/forms';
import {defaultSort, TuiComparator} from '@taiga-ui/addon-table';
import {TuiDay} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

interface Item {
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly unit: string;
    readonly date: TuiDay;
}

@Component({
    selector: 'tui-table-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTableExample2 {
    readonly options = {updateOn: 'blur'};

    readonly units = ['items', 'kg', 'm'];

    readonly minPrice: ValidatorFn = ({value}) =>
        value > 400 ? null : {minPrice: 'Price must be above $400'};

    data: readonly Item[] = [
        {
            name: 'Holy Grail',
            price: 999999,
            quantity: 1,
            unit: this.units[0],
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Shed',
            price: 499,
            quantity: 2,
            unit: this.units[0],
            date: TuiDay.currentLocal().append({day: -237}),
        },
        {
            name: 'Foot',
            price: 29.95,
            quantity: 5,
            unit: this.units[2],
            date: TuiDay.currentLocal().append({day: -42}),
        },
        {
            name: 'Holy Grail',
            price: 999999,
            quantity: 1,
            unit: this.units[0],
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Shed',
            price: 499,
            quantity: 2,
            unit: this.units[0],
            date: TuiDay.currentLocal().append({day: -237}),
        },
        {
            name: 'Foot',
            price: 29.95,
            quantity: 5,
            unit: this.units[2],
            date: TuiDay.currentLocal().append({day: -42}),
        },
    ];

    readonly columns = [...Object.keys(this.data[0]), 'total'];

    readonly totalSorter: TuiComparator<Item> = (a, b) =>
        defaultSort(a.price * a.quantity, b.price * b.quantity);

    getError(model: NgControl): string {
        return model.touched && model.errors ? model.errors['minPrice'] : '';
    }

    getTotal({price, quantity}: Item): number {
        return price * quantity;
    }

    onValueChange<K extends keyof Item>(value: Item[K], key: K, current: Item) {
        const updated = {...current, [key]: value};

        this.data = this.data.map(item => (item === current ? updated : item));
    }
}
