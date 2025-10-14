import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

describe('ng-update', () => {
    const runMigration = async (component: string): Promise<string> => {
        const host = new UnitTestTree(new HostTree());
        const runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        host.create('test/app/test.ts', component);
        host.create('test/app/test.html', '');
        host.create('package.json', '{}');

        await runner.runSchematic('updateToV5', {'skip-logs': true}, host);

        saveActiveProject();

        return host.readContent('test/app/test.ts');
    };

    it('migrate tuiIsNativeFocused to tuiIsFocused', async () => {
        expect(
            await runMigration(`
import {tuiIsNativeFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public ngOnDestroy(): void {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }
}
`),
        ).toEqual(`
import {tuiIsFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public ngOnDestroy(): void {
        if (tuiIsFocused(this.el)) {
            this.el.blur();
        }
    }
}
`);
    });

    it('migrate tuiIsNativeFocusedIn to tuiIsFocusedIn', async () => {
        expect(
            await runMigration(`
import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsNativeFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }
}
`),
        ).toEqual(`
import {tuiIsFocusedIn} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }
}
`);
    });

    it('migrate tuiGetNativeFocused to tuiGetFocused', async () => {
        expect(
            await runMigration(`
import {tuiGetNativeFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
    }
}
`),
        ).toEqual(`
import {tuiGetFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetFocused(this.doc));
    }
}
`);
    });

    it('migrate tuiIsNativeMouseFocusable to tuiIsMouseFocusable', async () => {
        expect(
            await runMigration(`
import {tuiIsNativeMouseFocusable} from '@taiga-ui/cdk';

tuiIsNativeMouseFocusable(document.createElement('div'));
`),
        ).toEqual(`
import {tuiIsMouseFocusable} from '@taiga-ui/cdk';

tuiIsMouseFocusable(document.createElement('div'));
`);
    });

    it('migrate tuiIsNativeKeyboardFocusable to tuiIsNativeKeyboardFocusable', async () => {
        expect(
            await runMigration(`
import {tuiIsNativeKeyboardFocusable} from '@taiga-ui/cdk';

tuiIsNativeKeyboardFocusable(document.createElement('div'));
`),
        ).toEqual(`
import {tuiIsKeyboardFocusable} from '@taiga-ui/cdk';

tuiIsKeyboardFocusable(document.createElement('div'));
`);
    });

    it('migrate tuiBlurNativeFocused to tuiBlurFocused', async () => {
        expect(
            await runMigration(`
import {tuiBlurNativeFocused} from '@taiga-ui/cdk';

tuiBlurNativeFocused(document);
`),
        ).toEqual(`
import {tuiBlurFocused} from '@taiga-ui/cdk';

tuiBlurFocused(document);
`);
    });

    afterEach(() => resetActiveProject());
});
