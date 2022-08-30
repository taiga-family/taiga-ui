import {Component, Inject, OnDestroy, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: `example-tui-table-bar`,
    templateUrl: `./table-bar.template.html`,
    styleUrls: [`./table-bar.style.less`],
    changeDetection,
})
export class ExampleTuiTableBarComponent implements OnDestroy {
    private readonly destroy$ = new Subject<void>();

    @ViewChild(`tableBarTemplate`)
    readonly tableBarTemplate: PolymorpheusContent = ``;

    readonly exampleServiceUsage = import(`./examples/import/service-usage.md?raw`);

    readonly exampleServiceUsageHtml = import(
        `./examples/import/service-usage-html.md?raw`
    );

    readonly exampleLazyModule = import(`./examples/import/lazy-module.md?raw`);
    readonly exampleModule = import(`./examples/import/module.md?raw`);
    readonly exampleHtml = import(`./examples/import/template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly modeVariants: readonly TuiBrightness[] = [`onLight`, `onDark`];

    mode = this.modeVariants[0];

    adaptive = false;

    hasCloseButton = false;

    subscription = new Subscription();

    constructor(
        @Inject(TuiTableBarsService)
        private readonly tableBarsService: TuiTableBarsService,
    ) {}

    showTableBar(): void {
        this.subscription.unsubscribe();

        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || ``, {
                adaptive: this.adaptive,
                mode: this.mode,
                hasCloseButton: this.hasCloseButton,
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }

    destroy(): void {
        this.destroy$.next();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
