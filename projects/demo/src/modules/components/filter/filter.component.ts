import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TuiAlertService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';

class ItemWithBadge {
    constructor(readonly text: string, readonly badgeValue?: number) {}

    toString(): string {
        return this.text;
    }

    valueOf(): number | null {
        return this.badgeValue ? this.badgeValue : null;
    }
}

@Component({
    selector: `example-filters`,
    templateUrl: `./filter.template.html`,
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    initialItems = [`Alex Inkin`, `Roman Sedov`];

    itemsVariants: Array<ReadonlyArray<ItemWithBadge | string>> = [
        [`Alex Inkin`, `Roman Sedov`],
        [
            new ItemWithBadge(`Focused Zone`, 10),
            new ItemWithBadge(`Dropdown`, 100),
            new ItemWithBadge(`Menu Items`, 30),
            new ItemWithBadge(`Accordion`),
        ],
    ];

    badgeHandlerVariants: ReadonlyArray<TuiHandler<unknown, number>> = [
        item => Number(item),
        item => String(item).length,
    ];

    badgeHandler = this.badgeHandlerVariants[0];

    disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<ItemWithBadge | string>
    > = [
        ALWAYS_FALSE_HANDLER,
        item => item === `Roman Sedov`,
        item => (item.valueOf() || 0) >= 30,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    items = this.itemsVariants[0];

    control = new FormControl(this.initialItems);

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [`s`, `m`, `l`];

    size: TuiSizeL | TuiSizeS = this.sizeVariants[1];

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onToggledItemChange(item: unknown): void {
        this.alertService.open(String(item)).subscribe();
    }
}
