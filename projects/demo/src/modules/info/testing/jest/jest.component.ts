import {Component} from '@angular/core';

@Component({
    selector: `jest`,
    templateUrl: `./jest.template.html`,
})
export class JestComponent {
    readonly jestConfigJs = import(`!!raw-loader!./examples/jest-config-js.md`);
    readonly packageJson = import(`!!raw-loader!./examples/package-json.md`);
    readonly setupJestJs = import(`!!raw-loader!./examples/setup-jest-js.md`);
}
