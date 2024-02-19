import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCodeModule, TuiDocTabModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiAccordionModule, TuiTabsModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'demo-home',
    imports: [
        TuiTabsModule,
        TuiDocTabModule,
        NgIf,
        TuiDocCodeModule,
        TuiLinkModule,
        RouterLink,
        TuiAccordionModule,
        TuiNotificationModule,
    ],
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.less'],
    encapsulation,
    changeDetection,
})
export class HomeComponent {
    readonly angularJsonStyles = import('./examples/angular-json-styles.md?raw');
    readonly projectJsonStyles = import('./examples/project-json-styles.md?raw');
    readonly angularJsonGlobalSingleStyles = import(
        './examples/angular-json-global-single-styles.md?raw'
    );

    readonly stylesLess = import('./examples/styles.less.md?raw');
    readonly appModule = import('./examples/app-module.md?raw');
    readonly appTemplate = import('./examples/app-template.md?raw');
    readonly appModuleOptional = import('./examples/app-module-optional.md?raw');
    readonly assets = import('./examples/assets.md?raw');
    readonly nxAssets = import('./examples/nx-assets.md?raw');
    readonly componentsStyles = import('./examples/components-styles.md?raw');
    readonly importLocalLess = import('./examples/import-local-less.md?raw');
    readonly main = import('./examples/main.md?raw');
    readonly addons = import('./examples/addons.md?raw');
    readonly nxAdd = import('./examples/nx-add.md?raw');
    readonly nxMigrate = import('./examples/nx-migrate.md?raw');
    readonly standalone = import('./examples/app-standalone.md?raw');
    readonly standaloneMain = import('./examples/main-standalone.md?raw');
    readonly standaloneMainOptional = import(
        './examples/main-standalone-optional.md?raw'
    );

    readonly customGlobalStyle = import(
        '../../../../../styles/taiga-ui-global.less?raw'
    ).then(({default: content}) => ({
        default: content
            // eslint-disable-next-line @typescript-eslint/quotes
            .replaceAll("@import '", `@import '@taiga-ui/styles/`)
            .replace('@taiga-ui/styles/@taiga-ui/core', '@taiga-ui/core'),
    }));
}
