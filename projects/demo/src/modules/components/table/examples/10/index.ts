import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiSortChange, TuiTable} from '@taiga-ui/addon-table';

interface Data {
    id: number;
    name: string;
    color: string;
}

@Component({
    standalone: true,
    imports: [TuiTable],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly initial = [
        {
            name: 'Apple',
            id: 1,
            color: 'red',
        },
        {
            name: 'Banana',
            id: 2,
            color: 'yellow',
        },
        {
            name: 'Kiwi',
            id: 3,
            color: 'green',
        },
        {
            name: 'Orange',
            id: 4,
            color: 'orange',
        },
        {
            name: 'Grapes',
            id: 5,
            color: 'purple',
        },
        {
            name: 'Strawberry',
            id: 6,
            color: 'red',
        },
        {
            name: 'Blueberry',
            id: 7,
            color: 'blue',
        },
        {
            name: 'Pineapple',
            id: 8,
            color: 'yellow',
        },
        {
            name: 'Mango',
            id: 9,
            color: 'orange',
        },
        {
            name: 'Watermelon',
            id: 10,
            color: 'green',
        },
        {
            name: 'Peach',
            id: 11,
            color: 'orange',
        },
        {
            name: 'Pear',
            id: 12,
            color: 'green',
        },
        {
            name: 'Cherry',
            id: 13,
            color: 'red',
        },
        {
            name: 'Lemon',
            id: 14,
            color: 'yellow',
        },
        {
            name: 'Lime',
            id: 15,
            color: 'green',
        },
        {
            name: 'Pomegranate',
            id: 16,
            color: 'red',
        },
        {
            name: 'Raspberry',
            id: 17,
            color: 'red',
        },
        {
            name: 'Blackberry',
            id: 18,
            color: 'purple',
        },
        {
            name: 'Cantaloupe',
            id: 19,
            color: 'orange',
        },
        {
            name: 'Plum',
            id: 20,
            color: 'purple',
        },
    ] as const;

    protected readonly columns = Object.keys(this.initial[0]);
    protected readonly direction = signal<-1 | 1>(-1);
    protected readonly sortBy = signal<keyof Data | null>('color');
    protected readonly data = computed<readonly Data[]>(() => {
        const direction = this.direction();
        const key = this.sortBy();

        return key
            ? [...this.initial].sort((a, b) => {
                  const valA = a[key];
                  const valB = b[key];

                  if (typeof valA === 'string' && typeof valB === 'string') {
                      return valA.localeCompare(valB) * direction;
                  }

                  if (typeof valA === 'number' && typeof valB === 'number') {
                      return (valA - valB) * direction;
                  }

                  return 0;
              })
            : this.initial;
    });

    protected sortChange({sortKey, sortDirection}: TuiSortChange<Data>): void {
        this.sortBy.set(sortKey);
        this.direction.set(sortDirection);
    }
}
