import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

const collectionPath = join(__dirname, '../../migration.json');

const AFTER = `import {Component} from '@angular/core';

@Component({templateUrl: './app.template.html'})
export class AppComponent extends AbstractTuiController {
    some = number ?? 5;

    method(): void {
        return someFn(b ?? "some");
    }

    get formattedDayPart(): string {
        this.some = '1000'.padStart(10, " ");
        return String(this.day).padStart(2, '0');
    }

    private hasClosest(suitableNode: any, selector: string): void {
        const element = (suitableNode as Element).closest(selector);
        return Boolean(element);
    }
}

expect(element.closest('div')).toEqual(div);

const event = new CustomEvent("hello", {
               bubbles: true,
               cancelable: true,
               detail: true,
           });
`;

const BEFORE = `import {Component} from '@angular/core';
import { fallbackValue, tuiCustomEvent, getClosestElement, padStart } from '@taiga-ui/cdk';

@Component({templateUrl: './app.template.html'})
export class AppComponent extends AbstractTuiController {
    some = fallbackValue(number, 5);

    method(): void {
        return someFn(fallbackValue<string>(b, "some"));
    }

    get formattedDayPart(): string {
        this.some = padStart('1000', 10);
        return padStart(String(this.day), 2, '0');
    }

    private hasClosest(suitableNode: any, selector: string): void {
        const element = getClosestElement(suitableNode as Element, selector);
        return Boolean(element);
    }
}

expect(getClosestElement(element, 'div')).toEqual(div);

const event = tuiCustomEvent(
           "hello",
           {
               bubbles: true,
               cancelable: true,
               detail: true,
           },
           document,
       );
`;

describe('replace functions', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace functions', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.component.ts', BEFORE);

    createSourceFile('test/app/app.template.html', `<app></app>`);
}
