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
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    initialItems = [`Alex Inkin`, `Roman Sedov`];

    itemsVariants: Array<ReadonlyArray<string | ItemWithBadge>> = [
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
        TuiBooleanHandler<string | ItemWithBadge>
    > = [
        ALWAYS_FALSE_HANDLER,
        item => item === `Roman Sedov`,
        item => (item.valueOf() || 0) >= 30,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    items = this.itemsVariants[0];

    control = new FormControl(this.initialItems);

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = [`s`, `m`, `l`];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[1];

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
    ) {}

    onToggledItemChange(item: unknown): void {
        this.alertService.open(String(item)).subscribe();
    }
}
