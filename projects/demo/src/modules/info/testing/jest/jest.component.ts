import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `jest`,
    templateUrl: `./jest.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JestComponent {
    readonly jestConfigJs = import(`./examples/jest-config-js.md?raw`);
    readonly packageJson = import(`./examples/package-json.md?raw`);
    readonly setupJestJs = import(`./examples/setup-jest-js.md?raw`);
}
