import {Injectable, signal} from '@angular/core';

export interface TuiDocApiCopyEntry {
    name(): string;
    type(): string;
    value(): unknown;
}

@Injectable()
export class TuiDocApiCopyRegistry {
    private readonly items: TuiDocApiCopyEntry[] = [];
    private readonly revision = signal(0);

    public register(item: TuiDocApiCopyEntry): void {
        this.items.push(item);
        this.revision.update((value) => value + 1);
    }

    public unregister(item: TuiDocApiCopyEntry): void {
        const index = this.items.indexOf(item);

        if (index >= 0) {
            this.items.splice(index, 1);
            this.revision.update((value) => value + 1);
        }
    }

    public snapshot(): readonly TuiDocApiCopyEntry[] {
        this.revision();

        return this.items;
    }
}
