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
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../migration.json');

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should replaces enums with strings and removes imports', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(
            `import {Component} from '@angular/core';
import {some} from '@taiga-ui/cdk';
import {TuiLineType} from '@taiga-ui/cdk';
const lineType: TuiLineType = 'solid';

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some = 'left';
   some2 = 'string';
   some3 = () => {
   if(this.some2 === 'right') {
   return
   }
   }
   decimal = 'never';
}`,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `import {Component} from '@angular/core';
import {TuiTextAlign, some} from '@taiga-ui/cdk';
import {TuiLineType} from '@taiga-ui/cdk';
import {TuiDecimal} from '@taiga-ui/core';

const lineType: TuiLineType = TuiLineType.Solid;

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   some: TuiTextAlign = TuiTextAlign.Left;
   some2 = 'string';
   some3 = () => {
   if(this.some2 === TuiTextAlign.Right) {
   return
   }
   }
   decimal = TuiDecimal.Never;
}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);

    createAngularJson();
}
