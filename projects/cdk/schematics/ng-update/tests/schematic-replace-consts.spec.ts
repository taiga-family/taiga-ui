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

const AFTER = `import { TuiTableCommands } from "@taiga-ui/addon-editor";
import { TuiCountryIsoCode } from "@taiga-ui/i18n";
import { identity } from "rxjs";
import { TuiAlertModule } from "@taiga-ui/core";
import { Validators } from "@angular/forms";
import {Component} from '@angular/core';
import { tuiCreateAutoCorrectedDatePipe, tuiCreateDateMask, tuiCreateDateRangeMask } from '@taiga-ui/kit';
import { getClosestFocusable } from '@taiga-ui/cdk';

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   private readonly textMaskOptions = {
        mask: tuiCreateDateMask('DMY', '.'),
        pipe: tuiCreateAutoCorrectedDatePipe(this),
        guide: false,
    };

    mask = tuiCreateDateRangeMask('DMY', '.');

    command = TuiTableCommands.InsertColumnBefore;

    control = new FormControl('', [Validators.nullValidator]);

    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestFocusable(target, 'button')) {
            return null;
        }
    }
}

@NgModule({
    imports: [
      TuiAlertModule
    ],
    declarations: [AppComponent],
})
export class TuiTestModule {}


const countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
    [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ],
    Object.values(TuiCountryIsoCode),
];
`;

const BEFORE = `import {Component} from '@angular/core';
import {TUI_DATE_MASK, TUI_DATE_RANGE_MASK, TuiCountryIsoCode, tuiCreateAutoCorrectedDatePipe} from '@taiga-ui/kit';
import {EMPTY_VALIDATOR} from '@taiga-ui/cdk';
import { getClosestKeyboardFocusable, identity } from '@taiga-ui/cdk';
import { TuiNotificationsModule } from '@taiga-ui/core';
import { TableComands } from '@taiga-ui/addon-editor';
import {TuiResizableColumnModule} from '@taiga-ui/addon-table';

@Component({templateUrl: './app.template.html'})
export class AppComponent {
   private readonly textMaskOptions = {
        mask: TUI_DATE_MASK,
        pipe: tuiCreateAutoCorrectedDatePipe(this),
        guide: false,
    };

    mask = TUI_DATE_RANGE_MASK;

    command = TableComands.InsertColumnBefore;

    control = new FormControl('', [EMPTY_VALIDATOR]);

    onMouseDown(event: MouseEvent, target: HTMLElement) {
        if (getClosestKeyboardFocusable(target, 'button')) {
            return null;
        }
    }
}

@NgModule({
    imports: [
      TuiNotificationsModule,
      TuiResizableColumnModule
    ],
    declarations: [AppComponent],
})
export class TuiTestModule {}


const countriesVariants: ReadonlyArray<readonly TuiCountryIsoCode[]> = [
    [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ],
    Object.values(TuiCountryIsoCode),
];
`;

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

    it('should replace consts', async () => {
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
