import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3AlertExampleComponent} from '!!raw-loader!./examples/3/alert-example/alert-example.component.ts';
import {default as example3AlertExampleModule} from '!!raw-loader!./examples/3/alert-example/alert-example.module.ts';
import {default as example3AlertExampleTemplate} from '!!raw-loader!./examples/3/alert-example/alert-example.template.html';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4AlertDataComponent} from '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.component.ts';
import {default as example4AlertDataModule} from '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.module';
import {default as example4AlertDataStyle} from '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.style.less';
import {default as example4AlertDataTemplate} from '!!raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.template.html';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as example5CustomLabelComponent} from '!!raw-loader!./examples/5/custom-label/custom-label.component.ts';
import {default as example5CustomLabelModule} from '!!raw-loader!./examples/5/custom-label/custom-label.module.ts';
import {default as example5CustomLabelStyle} from '!!raw-loader!./examples/5/custom-label/custom-label.style.less';
import {default as example5CustomLabelTemplate} from '!!raw-loader!./examples/5/custom-label/custom-label.template.html';

import {default as example5AlertExampleComponent} from '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts';
import {default as example5AlertExampleModule} from '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts';
import {default as example5AlertExampleTemplate} from '!!raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html';

import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';

import {default as exampleCustomAlert} from '!!raw-loader!./examples/import/custom-alert.txt';
import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModuleComponent} from '!!raw-loader!./examples/import/import-module-component.txt';
import {default as exampleLazyModule} from '!!raw-loader!./examples/import/lazy-module.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/module.txt';
import {default as exampleServiceUsageComponent} from '!!raw-loader!./examples/import/service-usage-component.txt';
import {default as exampleServiceUsage} from '!!raw-loader!./examples/import/service-usage.txt';

import {Component, Inject, Injector} from '@angular/core';
import {
    TuiNotification,
    TuiNotificationContentContext,
    TuiNotificationsService,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';

@Component({
    selector: 'example-tui-notifications',
    templateUrl: './notifications.template.html',
    styleUrls: ['./notifications.style.less'],
    changeDetection,
})
export class ExampleTuiNotificationsComponent {
    readonly exampleImportModuleComponent = exampleImportModuleComponent;
    readonly exampleServiceUsage = exampleServiceUsage;
    readonly exampleServiceUsageComponent = exampleServiceUsageComponent;
    readonly exampleCustomAlert = exampleCustomAlert;
    readonly exampleLazyModule = exampleLazyModule;
    readonly exampleModule = exampleModule;
    readonly exampleDefineOptions = exampleDefineOptions;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3 = {
        TypeScript: example3Ts,
        HTML: example3Html,
        'alert-example/alert-example.component.ts': example3AlertExampleComponent,
        'alert-example/alert-example.template.html': example3AlertExampleTemplate,
        'alert-example/alert-example.module.ts': example3AlertExampleModule,
    };

    readonly example4 = {
        TypeScript: example4Ts,
        HTML: example4Html,
        'alert-example-with-data/alert-example-with-data.component.ts':
            example4AlertDataComponent,
        'alert-example-with-data/alert-example-with-data.template.html':
            example4AlertDataTemplate,
        'alert-example-with-data/alert-example-with-data.style.less':
            example4AlertDataStyle,
        'alert-example-with-data/alert-example-with-data.module.ts':
            example4AlertDataModule,
    };

    readonly example5 = {
        TypeScript: example5Ts,
        HTML: example5Html,
        'custom-label/custom-label.module.ts': example5CustomLabelModule,
        'custom-label/custom-label.component.ts': example5CustomLabelComponent,
        'custom-label/custom-label.style.less': example5CustomLabelStyle,
        'custom-label/custom-label.template.html': example5CustomLabelTemplate,
        'alert-example-with-custom-label/alert-example-with-custom-label.module.ts':
            example5AlertExampleModule,
        'alert-example-with-custom-label/alert-example-with-custom-label.component.ts':
            example5AlertExampleComponent,
        'alert-example-with-custom-label/alert-example-with-custom-label.template.html':
            example5AlertExampleTemplate,
    };

    data = 100;

    label = 'Heading';

    readonly statusVariants: ReadonlyArray<TuiNotification> = [
        TuiNotification.Info,
        TuiNotification.Success,
        TuiNotification.Error,
        TuiNotification.Warning,
    ];

    status = this.statusVariants[0];

    readonly contentVariants = ['String', 'Component'];

    content = this.contentVariants[0];

    readonly autoCloseVariants = [true, false, 5000, 1000, 500];

    autoClose = this.autoCloseVariants[0];

    hasCloseButton = true;

    hasIcon = true;

    readonly component: PolymorpheusComponent<
        AlertExampleWithDataComponent,
        TuiNotificationContentContext<number, number>
    >;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        @Inject(Injector) injector: Injector,
    ) {
        this.component = new PolymorpheusComponent(
            AlertExampleWithDataComponent,
            injector,
        );
    }

    get selectedContent(): PolymorpheusContent<
        TuiNotificationContentContext<number, number>
    > {
        return this.content === 'String' ? this.content : this.component;
    }

    showNotification() {
        this.notificationsService
            .show(this.selectedContent, {
                label: this.label,
                data: this.data,
                status: this.status,
                autoClose: this.autoClose,
                hasCloseButton: this.hasCloseButton,
                hasIcon: this.hasIcon,
            })
            .pipe(
                switchMap(response =>
                    this.notificationsService.show(response, {
                        label: 'Notification responded with:',
                    }),
                ),
            )
            .subscribe();
    }
}
