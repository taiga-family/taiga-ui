import {Injectable, signal} from '@angular/core';

import {type TuiDocAPIItem} from './api-item.component';

@Injectable()
export class TuiDocApiCopyRegistry {
    private readonly items: TuiDocAPIItem<unknown>[] = [];
    private readonly revision = signal(0);

    public register(item: TuiDocAPIItem<unknown>): void {
        this.items.push(item);
        this.revision.update((value) => value + 1);
    }

    public unregister(item: TuiDocAPIItem<unknown>): void {
        const index = this.items.indexOf(item);

        if (index >= 0) {
            this.items.splice(index, 1);
            this.revision.update((value) => value + 1);
        }
    }

    public snapshot(): readonly TuiDocAPIItem<unknown>[] {
        this.revision();

        return this.items;
    }
}
