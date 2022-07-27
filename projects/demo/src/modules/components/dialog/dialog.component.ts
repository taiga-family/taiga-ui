import {Component, Inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TuiAlertService,
    TuiDialogContext,
    TuiDialogService,
    TuiDialogSize,
} from '@taiga-ui/core';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: `example-tui-dialog`,
    templateUrl: `./dialog.template.html`,
    styleUrls: [`./dialog.style.less`],
    changeDetection,
})
export class ExampleTuiDialogComponent {
    readonly method = import(`!!raw-loader!./method.md`);

    readonly dialogsCloseToken = import(
        `!!raw-loader!./examples/import/dialogs-close-token.md`
    );

    readonly exampleDialogClosesOnBackToken = import(
        `!!raw-loader!./examples/import/dialog-closes-on-back-token.md`
    );

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        'dialog-example/dialog-example.module.ts': import(
            `!!raw-loader!./examples/2/dialog-example/dialog-example.module.ts`
        ),
        'dialog-example/dialog-example.component.ts': import(
            `!!raw-loader!./examples/2/dialog-example/dialog-example.component.ts`
        ),
        'dialog-example/dialog-example.style.less': import(
            `!!raw-loader!./examples/2/dialog-example/dialog-example.style.less`
        ),
        'dialog-example/dialog-example.template.html': import(
            `!!raw-loader!./examples/2/dialog-example/dialog-example.template.html`
        ),
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

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/6/index.ts`),
        HTML: import(`!!raw-loader!./examples/6/index.html`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/7/index.ts`),
        HTML: import(`!!raw-loader!./examples/7/index.html`),
        'search-example/search-dialog-example.component.ts': import(
            `!!raw-loader!./examples/7/search-example/search-dialog-example.component.ts`
        ),
        'search-example/search-dialog-example.component.html': import(
            `!!raw-loader!./examples/7/search-example/search-dialog-example.template.html`
        ),
        'search-example/search-dialog-example.component.less': import(
            `!!raw-loader!./examples/7/search-example/search-dialog-example.component.less`
        ),
        'search-dialog.module.ts': import(
            `!!raw-loader!./examples/7/search-example/search-dialog.module.ts`
        ),
    };

    readonly exampleImportModuleComponent = import(
        `!!raw-loader!./examples/import/import-module-component.md`
    );

    readonly exampleServiceUsage = import(
        `!!raw-loader!./examples/import/service-usage.md`
    );

    readonly exampleCustomDialog = import(
        `!!raw-loader!./examples/import/custom-dialog.md`
    );

    readonly exampleLazyModule = import(`!!raw-loader!./examples/import/lazy-module.md`);

    readonly exampleModule = import(`!!raw-loader!./examples/import/module.md`);

    data = 100;

    closeable = true;

    dismissible = true;

    required = false;

    readonly sizeVariants: readonly TuiDialogSize[] = [
        `s`,
        `m`,
        `l`,
        `fullscreen`,
        `page`,
        `auto`,
    ];

    size: TuiDialogSize = this.sizeVariants[1];

    label = ``;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(TuiDialogService)
        private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(content: TemplateRef<TuiDialogContext<number, number>>): void {
        const {data, label, required, closeable, dismissible, size} = this;

        this.dialogService
            .open(content, {data, label, required, closeable, dismissible, size})
            .pipe(switchMap(response => this.alertService.open(String(response))))
            .subscribe();
    }
}
