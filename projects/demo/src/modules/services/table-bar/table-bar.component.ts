import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as exampleLazyModule} from '!!raw-loader!./examples/import/lazy-module.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/module.txt';
import {default as exampleServiceUsageHtml} from '!!raw-loader!./examples/import/service-usage-html.txt';
import {default as exampleServiceUsage} from '!!raw-loader!./examples/import/service-usage.txt';
import {default as exampleTemplate} from '!!raw-loader!./examples/import/template.txt';

import {Component, Inject, OnDestroy, ViewChild} from '@angular/core';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {TuiBrightness} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-table-bar',
    templateUrl: './table-bar.template.html',
    styleUrls: ['./table-bar.style.less'],
    changeDetection,
})
export class ExampleTuiTableBarComponent implements OnDestroy {
    readonly exampleServiceUsage = exampleServiceUsage;
    readonly exampleServiceUsageHtml = exampleServiceUsageHtml;
    readonly exampleLazyModule = exampleLazyModule;
    readonly exampleModule = exampleModule;
    readonly exampleTemplate = exampleTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly modeVariants: ReadonlyArray<TuiBrightness> = [
        TuiBrightness.Dark,
        TuiBrightness.Light,
    ];

    mode = this.modeVariants[0];

    adaptive = false;

    hasCloseButton = false;

    subscription = new Subscription();

    @ViewChild('tableBarTemplate', {read: PolymorpheusTemplate})
    readonly tableBarTemplate?: PolymorpheusTemplate<{}>;

    private destroy$ = new Subject<void>();

    constructor(
        @Inject(TuiTableBarsService)
        private readonly tableBarsService: TuiTableBarsService,
    ) {}

    showTableBar() {
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

    destroy() {
        this.destroy$.next();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
