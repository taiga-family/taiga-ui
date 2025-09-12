import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule, type ValidatorFn} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {type TuiComparator, TuiTable} from '@taiga-ui/addon-table';
import {TuiDay, tuiDefaultSort, TuiLet, TuiValidator} from '@taiga-ui/cdk';
import {
    TuiFormatNumberPipe,
    TuiIcon,
    TuiNumberFormat,
    TuiScrollbar,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiInputNumber, TuiTextarea} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';

interface Item {
    readonly date: TuiDay;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly unit: string;
}

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiIcon,
        TuiInputDateModule,
        TuiInputNumber,
        TuiLet,
        TuiNumberFormat,
        TuiScrollbar,
        TuiTable,
        TuiTextarea,
        TuiTextfield,
        TuiValidator,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly options = {updateOn: 'blur'} as const;

    protected readonly units = ['items', 'kg', 'm'];

    protected pythons: readonly Item[] = [
        {
            name: 'Holy Grail',
            price: 999999,
            quantity: 1,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Foot',
            price: 29.95,
            quantity: 5,
            unit: this.units[2] ?? '',
            date: TuiDay.currentLocal().append({day: -42}),
        },
        {
            name: 'Shed',
            price: 499,
            quantity: 2,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -237}),
        },
    ];

    protected starwars: readonly Item[] = [
        {
            name: 'Lightsaber',
            price: 4999,
            quantity: 3,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal(),
        },
        {
            name: 'Spaceship',
            price: 19999,
            quantity: 1,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -237}),
        },
        {
            name: 'Stormtrooper helmet',
            price: 14.95,
            quantity: 5,
            unit: this.units[0] ?? '',
            date: TuiDay.currentLocal().append({day: -42}),
        },
    ];

    protected readonly columns = ['name', 'price', 'quantity', 'unit', 'total'] as const;

    protected readonly minPrice: ValidatorFn = ({value}) =>
        value > 400 ? null : {minPrice: 'Price must be above $400'};

    protected readonly totalSorter: TuiComparator<Item> = (a, b) =>
        tuiDefaultSort(a.price * a.quantity, b.price * b.quantity);

    protected trackByIndex(index: number): number {
        return index;
    }

    protected getTotal({price, quantity}: Item): number {
        return price * quantity;
    }

    protected onValueChange<K extends keyof Item>(
        value: Item[K],
        key: K,
        current: Item,
        data: readonly Item[],
    ): void {
        const updated = {...current, [key]: value};

        this.pythons =
            data === this.pythons
                ? this.pythons.map((item) => (item === current ? updated : item))
                : this.pythons;

        this.starwars =
            data === this.starwars
                ? this.starwars.map((item) => (item === current ? updated : item))
                : this.starwars;
    }
}
