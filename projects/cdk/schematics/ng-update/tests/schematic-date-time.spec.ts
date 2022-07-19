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

const BEFORE = `import {Component} from '@angular/core';
import {TuiDay, TuiMonth, TuiDayRange} from '@taiga-ui/cdk';

const day = new TuiDay(0, 0, 10).formattedDay;

@Component({templateUrl: './app.template.html'})
export class AppComponent {
    some = new TuiDay();
    formatted = new TuiDay().formattedDay;

    range = new TuiDayRange(this.some, this.some);
    formattedRange = this.range.formattedDayRange;
    normalized = TuiDayRange.normalizeParse(a, b, c);

    other: TuiDay = getTuiDay();

    show(): void {
       const kek = this.some;
       kek.formattedDay;
       this.some.formattedDay;

       this.other.formattedDay;

       this.other.getDayFromMonthRowCol(1, 2, 3);

       return TuiMonth.formattedMonth;
    }
}`;

const AFTER = `import {Component} from '@angular/core';
import {TuiDay, TuiMonth, TuiDayRange} from '@taiga-ui/cdk';

const day = new TuiDay(0, 0, 10).getFormattedDay("DMY", ".");

@Component({templateUrl: './app.template.html'})
export class AppComponent {
    some = new TuiDay();
    formatted = new TuiDay().getFormattedDay("DMY", ".");

    range = new TuiDayRange(this.some, this.some);
    formattedRange = this.range.getFormattedDayRange("DMY", ".");
    normalized = TuiDayRange.normalizeParse(a, "DMY");

    other: TuiDay = getTuiDay();

    show(): void {
       const kek = this.some;
       kek.getFormattedDay("DMY", ".");
       this.some.getFormattedDay("DMY", ".");

       this.other.getFormattedDay("DMY", ".");

// TODO: (Taiga UI migration) getDayFromMonthRowCol has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet
       this.other.getDayFromMonthRowCol(1, 2, 3);

// TODO: (Taiga UI migration) formattedMonth has been removed in 3.0. Please use TUI_MONTH_FORMATTER from @taiga-ui/kit
       return TuiMonth.formattedMonth;
    }
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

    it('date-time migrations', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.component.ts')).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.component.ts', BEFORE);
    createSourceFile('test/app/mock.ts', 'export class TuiDay {}');

    createSourceFile('test/app/app.template.html', `<app></app>`);

    createAngularJson();
}
