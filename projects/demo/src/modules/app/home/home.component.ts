import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.less'],
    changeDetection,
    encapsulation,
})
export class HomeComponent {
    readonly angularJsonStyles = import('./examples/angular-json-styles.md?raw');
    readonly appModule = import('./examples/app-module.md?raw');
    readonly appTemplate = import('./examples/app-template.md?raw');
    readonly appModuleOptional = import('./examples/app-module-optional.md?raw');
    readonly assets = import('./examples/assets.md?raw');
    readonly componentsStyles = import('./examples/components-styles.md?raw');
    readonly importLocalLess = import('./examples/import-local-less.md?raw');
    readonly main = import('./examples/main.md?raw');
    readonly addons = import('./examples/addons.md?raw');
}
