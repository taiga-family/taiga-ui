import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

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

import {default as exampleCustomDialog} from '!!raw-loader!./examples/import/custom-dialog.txt';
import {default as exampleImportModuleComponent} from '!!raw-loader!./examples/import/import-module-component.txt';
import {default as exampleLazyModule} from '!!raw-loader!./examples/import/lazy-module.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/module.txt';
import {default as exampleServiceUsage} from '!!raw-loader!./examples/import/service-usage.txt';

import {Component, Inject, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {LogService} from '../../app/log.service';
import {FrontEndExample} from '../../interfaces/front-end-example';

const TOKEN = `{
    provide: TUI_DIALOGS_CLOSE,
    deps: [Router],
    useFactory: ({events}) => events,
}`;

@Component({
    selector: 'example-tui-dialogs',
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    changeDetection,
    providers: [LogService],
})
export class ExampleTuiDialogsComponent {
    readonly token = TOKEN;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
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

    readonly exampleImportModuleComponent = exampleImportModuleComponent;
    readonly exampleServiceUsage = exampleServiceUsage;
    readonly exampleCustomDialog = exampleCustomDialog;
    readonly exampleLazyModule = exampleLazyModule;
    readonly exampleModule = exampleModule;

    data = 100;

    closeable = true;

    dismissible = true;

    required = false;

    readonly sizeVariants: ReadonlyArray<TuiDialogSize> = [
        's',
        'm',
        'l',
        'fullscreen',
        'page',
    ];

    size: TuiDialogSize = this.sizeVariants[1];

    label = '';

    constructor(
        @Inject(LogService) private log: LogService,
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(content: TemplateRef<TuiDialogContext<number, number>>) {
        const {data, label, required, closeable, dismissible, size} = this;

        this.dialogService
            .open(content, {data, label, required, closeable, dismissible, size})
            .subscribe(response => {
                this.log.log(response);
            });
    }
}
