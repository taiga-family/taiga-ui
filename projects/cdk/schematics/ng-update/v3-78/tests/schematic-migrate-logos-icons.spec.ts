import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {
    icon1 = tuiIconTdsTinkoffShieldLogoInverseEnLogoSiteheader;
    icon2 = tuiIconTdsTinkoffBusinessShieldLogoLogoSiteheader;
    icon3 = tuiIconTdsTinkoffBusinessShieldLogoInverseLogoSiteheader;
    icon4 = tuiIconTdsTinkoffEngLogo;
    icon5 = tuiIconTdsTinkoffRuLogo;
    icon6 = tuiIconTdsTinkoffShieldLogoInverseEnLogoSiteheader;
    icon7 = tuiIconTdsTinkoffShieldLogoEnLogoSiteheader;
    icon8 = tuiIconTdsTinkoffShieldLogoLogoSiteheader;
    icon9 = tuiIconTdsTinkoffShieldLogoInverseLogoSiteheader;
}`;

const COMPONENT_AFTER = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {
    icon1 = tuiIconTdsTBankEngInverseLogoSiteheader;
    icon2 = tuiIconTdsTBankBusinessLogoSiteheader;
    icon3 = tuiIconTdsTBankBusinessInverseLogoSiteheader;
    icon4 = tuiIconTdsTBankTextEngLogo;
    icon5 = tuiIconTdsTBankTextLogo;
    icon6 = tuiIconTdsTBankEngInverseLogoSiteheader;
    icon7 = tuiIconTdsTBankEngLogoSiteheader;
    icon8 = tuiIconTdsTBankLogoSiteheader;
    icon9 = tuiIconTdsTBankInverseLogoSiteheader;
}`;

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

    it('should migrate old deprecated logos', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV3_78',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/proprietary-core": "~3.78.0"}}',
    );
}
