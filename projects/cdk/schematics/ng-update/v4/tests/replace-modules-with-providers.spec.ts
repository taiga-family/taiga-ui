import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {createAngularJson} from '../../../utils/create-angular-json';
import {MODULES_TO_REPLACE_WITH_PROVIDERS} from '../steps/constants/modules-to-replace';

const collectionPath = join(__dirname, '../../../migration.json');

const MODULE_BEFORE = `import { TuiMobileCalendarDialogModule } from "@taiga-ui/addon-mobile";
import { OldModule } from "@namespace/cdk";
import { TuiProprietaryRootModule } from "@taiga-ui/proprietary-core";

@NgModule({
    imports: [ TuiMobileCalendarDialogModule, OldModule],
    providers: [importProvidersFrom(TuiProprietaryRootModule, TuiAlertModule)]
})
export class Test {
}`;

const MODULE_AFTER = `import { newProvider } from "@namespace/new";
import { tuiProvideMobileCalendar } from "@taiga-ui/addon-mobile";
import { TBANK_PROVIDERS } from "@taiga-ui/proprietary";
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";

@NgModule({
    imports: [ ],
    providers: [importProvidersFrom(TuiAlertModule), NG_EVENT_PLUGINS, TBANK_PROVIDERS, tuiProvideMobileCalendar(), newProvider]
})
export class Test {
}`;

const COMPONENT_BEFORE = `import { TuiMobileCalendarDialogModule } from "@taiga-ui/addon-mobile";
import { OldModule } from "@namespace/cdk";
import { TuiRootModule } from "@taiga-ui/core";

@Component({
    selector: 'app-my-component',
    standalone: true,
    template: '',
    imports: [
        TuiRootModule,
        TuiMobileCalendarDialogModule,
        OldModule
    ]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { newProvider } from "@namespace/new";
import { tuiProvideMobileCalendar } from "@taiga-ui/addon-mobile";
import { TuiRoot } from "@taiga-ui/core";

@Component({
    selector: 'app-my-component',
    standalone: true,
    template: '',
    imports: [
        TuiRoot
    ],
    providers: [tuiProvideMobileCalendar(), newProvider]
})
export class Test {
}`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        MODULES_TO_REPLACE_WITH_PROVIDERS.push({
            from: {name: 'OldModule', moduleSpecifier: '@namespace/cdk'},
            to: {name: 'newProvider', providerSpecifier: '@namespace/new'},
        });

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate module', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.module.ts')).toEqual(MODULE_AFTER);
    });

    it('should migrate component', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.module.ts', MODULE_BEFORE);
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0", "@taiga-ui/proprietary-core": "~3.42.0"}}',
    );
}
