import type {OnDestroy} from '@angular/core';
import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import type {TuiBrightness} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subject, Subscription, takeUntil} from 'rxjs';

@Component({
    selector: 'example-tui-table-bar',
    templateUrl: './table-bar.template.html',
    styleUrls: ['./table-bar.style.less'],
    changeDetection,
})
export class ExampleTuiTableBarComponent implements OnDestroy {
    private readonly tableBarsService = inject(TuiTableBarsService);

    private readonly destroy$ = new Subject<void>();

    @ViewChild('tableBarTemplate')
    protected readonly tableBarTemplate: PolymorpheusContent;

    protected readonly exampleServiceUsage = import(
        './examples/import/service-usage.md?raw'
    );

    protected readonly exampleServiceUsageHtml = import(
        './examples/import/service-usage-html.md?raw'
    );

    protected readonly exampleLazyModule = import('./examples/import/lazy-module.md?raw');
    protected readonly exampleModule = import('./examples/import/module.md?raw');
    protected readonly exampleHtml = import('./examples/import/template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly modeVariants: readonly TuiBrightness[] = ['onLight', 'onDark'];

    protected mode = this.modeVariants[0];

    protected adaptive = false;

    protected hasCloseButton = false;

    protected subscription = new Subscription();

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    protected showTableBar(): void {
        this.subscription.unsubscribe();

        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || '', {
                adaptive: this.adaptive,
                mode: this.mode,
                hasCloseButton: this.hasCloseButton,
            })
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }

    protected destroy(): void {
        this.destroy$.next();
    }
}
