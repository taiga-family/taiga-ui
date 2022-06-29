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

const BEFORE = `import {Component} from '@angular/core';
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

const lineType: TuiCurrency = TuiCurrency.HongKong_dollar;

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some: TuiCurrencyCode = TuiCurrencyCode.HongKong_dollar;

   constructor(
        @Inject(TuiDirectiveStylesService) private directiveStyles: TuiDirectiveStylesService,
    ) {}

    method() {
      this.directiveStyles.addComponent(component);
    }

    method2() {
      this.directiveStyles.addStyle(styles, 'style');
    }
}`;

const AFTER = `import {Component} from '@angular/core';
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

const lineType: TuiCurrency = TuiCurrency.HongKongDollar;

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some: TuiCurrencyCode = TuiCurrencyCode.HongKongDollar;

   constructor(
        @Inject(TuiDirectiveStylesService) private directiveStyles: TuiDirectiveStylesService,
    ) {}

    method() {
      this.directiveStyles.addComponent(component);
    }

    method2() {
// TODO: (Taiga UI migration) addStyle method has been removed. Use components approach
      this.directiveStyles.addStyle(styles, 'style');
    }
}`;

describe('ng-update miscellaneous', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace content', async () => {
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
