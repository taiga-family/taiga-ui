import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import example4Html from '!!raw-loader!./examples/4/index.html';
import example4Scss from '!!raw-loader!./examples/4/index.scss';
import example4Ts from '!!raw-loader!./examples/4/index.ts';
import example5Html from '!!raw-loader!./examples/5/index.html';
import example5Scss from '!!raw-loader!./examples/5/index.scss';
import example5Ts from '!!raw-loader!./examples/5/index.ts';
import exampleCustomDialog from '!!raw-loader!./examples/import/custom-dialog.txt';
import exampleImportModuleComponent from '!!raw-loader!./examples/import/import-module-component.txt';
import exampleLazyModule from '!!raw-loader!./examples/import/lazy-module.txt';
import exampleModule from '!!raw-loader!./examples/import/module.txt';
import exampleServiceUsage from '!!raw-loader!./examples/import/service-usage.txt';
import {Component, Inject, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';
import {LogService} from '../../app/log.service';
import {FrontEndExample} from '../../interfaces/front-end-example';

const TOKEN = `{
    provide: TUI_DIALOGS_CLOSE,
    deps: [Router],
    useFactory: ({events}) => events.pipe(filter(event => event instanceof NavigationStart)),
}`;

@Component({
    selector: 'example-tui-dialogs',
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.scss'],
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
        SCSS: example4Scss,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        SCSS: example5Scss,
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

    readonly sizeVariants: ReadonlyArray<TuiDialogSize> = ['s', 'm', 'l', 'fullscreen'];

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
