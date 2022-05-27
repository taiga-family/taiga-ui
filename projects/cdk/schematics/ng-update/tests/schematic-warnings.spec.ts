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

const collectionPath = join(__dirname, '../../migration.json');

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;
    let logs: LogEntry[];
    let logSubscription: Subscription;
    const testMessage = MIGRATION_WARNINGS[0].message;

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
        await runner.runSchematicAsync('updateToV3', {}, host).toPromise();
        const expectedLogs = logs
            .filter(log => log.level === 'warn')
            .map(log => log.message);

        expect(expectedLogs).toEqual([
            `[WARNING]: in /test/app/app.component.ts at line 1, col 9:  ${testMessage}`,
            `[WARNING]: in /test/app/app.component.ts at line 3, col 13:  ${testMessage}`,
            `[WARNING]: in /test/app/app.component.ts at line 6, col 13:  ${testMessage}`,
        ]);
    });

    afterEach(() => {
        resetActiveProject();
        logSubscription.unsubscribe();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `import {TUI_MOBILE_AWARE} from '@taiga-ui/kit';

const kek = TUI_MOBILE_AWARE;
@Component({templateUrl: './app.template.html'})
export class AppComponent {
    aware = TUI_MOBILE_AWARE;
}`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
}
