import {Component, Inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiAlertService,
    TuiDialogContext,
    TuiDialogService,
    TuiDialogSize,
} from '@taiga-ui/core';
import {switchMap} from 'rxjs/operators';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as dialogExampleComponent} from '!!raw-loader!./examples/2/dialog-example/dialog-example.component.ts';
import {default as dialogExampleModule} from '!!raw-loader!./examples/2/dialog-example/dialog-example.module.ts';
import {default as dialogExampleStyle} from '!!raw-loader!./examples/2/dialog-example/dialog-example.style.less';
import {default as dialogExampleTemplate} from '!!raw-loader!./examples/2/dialog-example/dialog-example.template.html';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example6Ts} from '!!raw-loader!./examples/6/index.ts';
import {default as exampleCustomDialog} from '!!raw-loader!./examples/import/custom-dialog.txt';
import {default as exampleDialogClosesOnBackToken} from '!!raw-loader!./examples/import/dialogClosesOnBackToken.txt';
import {default as exampleDialogsCloseToken} from '!!raw-loader!./examples/import/dialogs-close-token.txt';
import {default as exampleImportModuleComponent} from '!!raw-loader!./examples/import/import-module-component.txt';
import {default as exampleLazyModule} from '!!raw-loader!./examples/import/lazy-module.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/module.txt';
import {default as exampleServiceUsage} from '!!raw-loader!./examples/import/service-usage.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

const METHOD = `open<O>(
  content: PolymorpheusContent<TuiDialogContext<O, I>,
  options: Partial<TuiDialogOptions<I>>,
): Observable<O>`;

@Component({
    selector: 'example-tui-dialog',
    templateUrl: './dialog.template.html',
    styleUrls: ['./dialog.style.less'],
    changeDetection,
})
export class ExampleTuiDialogComponent {
    readonly dialogsCloseToken = exampleDialogsCloseToken;
    readonly exampleDialogClosesOnBackToken = exampleDialogClosesOnBackToken;

    readonly method = METHOD;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2 = {
        TypeScript: example2Ts,
        HTML: example2Html,
        'dialog-example/dialog-example.module.ts': dialogExampleModule,
        'dialog-example/dialog-example.component.ts': dialogExampleComponent,
        'dialog-example/dialog-example.style.less': dialogExampleStyle,
        'dialog-example/dialog-example.template.html': dialogExampleTemplate,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
    };

    readonly exampleImportModuleComponent = exampleImportModuleComponent;
    readonly exampleServiceUsage = exampleServiceUsage;
    readonly exampleCustomDialog = exampleCustomDialog;
    readonly exampleLazyModule = exampleLazyModule;
    readonly exampleModule = exampleModule;

    data = 100;

    closeable = true;

    dismissible = true;

    required = false;

    readonly sizeVariants: readonly TuiDialogSize[] = [
        's',
        'm',
        'l',
        'fullscreen',
        'page',
    ];

    size: TuiDialogSize = this.sizeVariants[1];

    label = '';

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
