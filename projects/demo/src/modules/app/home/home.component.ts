import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `home`,
    templateUrl: `./home.template.html`,
    styleUrls: [`./home.style.less`],
    changeDetection,
    encapsulation,
})
export class HomeComponent {
    readonly angularJsonStyles = import(`!!raw-loader!./examples/angular-json-styles.md`);
    readonly appModule = import(`!!raw-loader!./examples/app-module.md`);
    readonly appTemplate = import(`!!raw-loader!./examples/app-template.md`);
    readonly appModuleOptional = import(`!!raw-loader!./examples/app-module-optional.md`);
    readonly assets = import(`!!raw-loader!./examples/assets.md`);
    readonly componentsStyles = import(`!!raw-loader!./examples/components-styles.md`);
    readonly importLocalLess = import(`!!raw-loader!./examples/import-local-less.md`);
    readonly main = import(`!!raw-loader!./examples/main.md`);
    readonly addons = import(`!!raw-loader!./examples/addons.md`);
}
