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
import {Subscription} from 'rxjs';
import {LogEntry} from '@angular-devkit/core/src/logger/logger';
import {MIGRATION_WARNINGS} from '../constants/warnings';
import {createAngularJson} from '../../utils/create-angular-json';
import {TUI_WARNING_NORMALIZE} from '../steps/replace-styles';
import {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';

const collectionPath = join(__dirname, '../../migration.json');

const BEFORE = `
import {TUI_MOBILE_AWARE, COUNTRIES_MASKS} from '@taiga-ui/kit';
import {
    DumbEntity,
    DUMB_CONSTANT,
    awesomeFunction,
    TUI_LAST_DAY,
    TUI_DATE_FILLER,
    MEGA_CONSTANT,
    anotherAwesomeFunction
    MagicClass,
} from '@taiga-ui/cdk';
import {DumbEntity, TUI_DATE_RANGE_FILLER, MEGA_CONSTANT, MagicClass} from '@taiga-ui/cdk';
import {COUNTRIES} from '@taiga-ui/kit/components/input-phone-international';

const lol = TUI_DATE_FILLER;
const kek = TUI_MOBILE_AWARE;
const variable1 = TUI_DATE_RANGE_FILLER;
@Component({templateUrl: './app.template.html'})
export class AppComponent {
    aware = TUI_MOBILE_AWARE;
}
`;

const AFTER = `
// TODO: (Taiga UI migration) TUI_MOBILE_AWARE has been deleted in 3.0, please use TuiMobileTabsDirective from @taiga-ui/addon-mobile
// TODO: (Taiga UI migration) Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code
import {TUI_MOBILE_AWARE, COUNTRIES_MASKS} from '@taiga-ui/kit';
import {
    DumbEntity,
    DUMB_CONSTANT,
    awesomeFunction,
    TUI_LAST_DAY,
// TODO: (Taiga UI migration) TUI_DATE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date
    TUI_DATE_FILLER,
    MEGA_CONSTANT,
    anotherAwesomeFunction
    MagicClass,
} from '@taiga-ui/cdk';
// TODO: (Taiga UI migration) TUI_DATE_RANGE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date-range
import {DumbEntity, TUI_DATE_RANGE_FILLER, MEGA_CONSTANT, MagicClass} from '@taiga-ui/cdk';
// TODO: (Taiga UI migration) Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code. Use DI-token TUI_COUNTRIES to get localized country name by its iso code
import { COUNTRIES } from '@taiga-ui/kit';

const lol = TUI_DATE_FILLER;
const kek = TUI_MOBILE_AWARE;
const variable1 = TUI_DATE_RANGE_FILLER;
@Component({templateUrl: './app.template.html'})
export class AppComponent {
    aware = TUI_MOBILE_AWARE;
}
`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;
    let logs: LogEntry[];
    let logSubscription: Subscription;

    beforeEach(() => {
        logs = [];
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);
        logSubscription = runner.logger.subscribe(log =>
            logs.push(log),
        ) as unknown as Subscription;

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should show warnings', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV3',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();
        const expectedLogs = logs
            .filter(log => log.level === 'warn')
            .map(log => log.message);

        expect(expectedLogs).toEqual([
            `[WARNING] in /test/app/app.component.ts: ${MIGRATION_WARNINGS[0].message}`,
            `[WARNING] in /test/app/app.component.ts: ${MIGRATION_WARNINGS[1].message}`,
            `[WARNING] in /test/app/app.component.ts: ${MIGRATION_WARNINGS[2].message}`,
            `[WARNING] in /test/app/app.component.ts: ${MIGRATION_WARNINGS[4].message}`,
            `[WARNING] in /test/app/app.component.ts: ${MIGRATION_WARNINGS[5].message}`,
            TUI_WARNING_NORMALIZE,
        ]);

        expect(tree.readContent('test/app/app.component.ts')).toBe(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
        logSubscription.unsubscribe();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.component.ts', BEFORE);

    createSourceFile('test/app/app.template.html', `<app></app>`);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
