import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';

import * as exampleCustomAlert from '!!raw-loader!./examples/import/custom-alert.txt';
import * as exampleImportModuleComponent from '!!raw-loader!./examples/import/import-module-component.txt';
import * as exampleLazyModule from '!!raw-loader!./examples/import/lazy-module.txt';
import * as exampleModule from '!!raw-loader!./examples/import/module.txt';
import * as exampleServiceUsageComponent from '!!raw-loader!./examples/import/service-usage-component.txt';
import * as exampleServiceUsage from '!!raw-loader!./examples/import/service-usage.txt';

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
import {AlertExampleWithDataComponent} from './alert-example-with-data/alert-example-with-data.component';

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
    };

    data = 100;

    label = 'Заголовочек';

    readonly statusVariants: ReadonlyArray<TuiNotification> = [
        TuiNotification.Info,
        TuiNotification.Success,
        TuiNotification.Error,
        TuiNotification.Warning,
    ];

    status = this.statusVariants[0];

    readonly contentVariants = ['Строка', 'Компонент'];

    content = this.contentVariants[0];

    autoClose = true;

    hasCloseButton = true;

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
        return this.content === 'Строка' ? this.content : this.component;
    }

    showNotification() {
        this.notificationsService
            .showNotification(this.selectedContent, {
                label: this.label,
                data: this.data,
                status: this.status,
                autoClose: this.autoClose,
                hasCloseButton: this.hasCloseButton,
            })
            .pipe(
                switchMap(response =>
                    this.notificationsService.showNotification(response, {
                        label: 'Notification responded with:',
                    }),
                ),
            )
            .subscribe();
    }
}
