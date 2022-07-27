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

    readonly exampleServiceUsage = import(
        `!!raw-loader!./examples/import/service-usage.md`
    );

    readonly exampleServiceUsageHtml = import(
        `!!raw-loader!./examples/import/service-usage-html.md`
    );

    readonly exampleLazyModule = import(`!!raw-loader!./examples/import/lazy-module.md`);
    readonly exampleModule = import(`!!raw-loader!./examples/import/module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
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
