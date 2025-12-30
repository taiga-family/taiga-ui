import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('migrate tuiIsNativeFocused to tuiIsFocused', async () => {
        const {component} = await runMigration({
            collection,
            component: `
import {tuiIsNativeFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public ngOnDestroy(): void {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }
}`,
        });

        expect(component).toEqual(`
import {tuiIsFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public ngOnDestroy(): void {
        if (tuiIsFocused(this.el)) {
            this.el.blur();
        }
    }
}`);
    });

    it('migrate tuiIsNativeFocusedIn to tuiIsFocusedIn', async () => {
        const {component} = await runMigration({
            collection,
            component: `
import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsNativeFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }
}`,
        });

        expect(component).toEqual(`
import {tuiIsFocusedIn} from '@taiga-ui/cdk';

@Component({})
export class Test {
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }
}`);
    });

    it('migrate tuiGetNativeFocused to tuiGetFocused', async () => {
        const {component} = await runMigration({
            collection,
            component: `
import {tuiGetNativeFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
    }
}`,
        });

        expect(component).toEqual(`
import {tuiGetFocused} from '@taiga-ui/cdk';

@Component({})
export class Test {
    private get focused(): boolean {
        return this.dropdown.el.contains(tuiGetFocused(this.doc));
    }
}`);
    });

    it('migrate tuiIsNativeKeyboardFocusable to tuiIsFocusable', async () => {
        const {component} = await runMigration({
            collection,
            component: `
import {tuiIsNativeKeyboardFocusable} from '@taiga-ui/cdk';

tuiIsNativeKeyboardFocusable(document.createElement('div'));
`,
        });

        expect(component).toEqual(`
import {tuiIsFocusable} from '@taiga-ui/cdk';

tuiIsFocusable(document.createElement('div'));
`);
    });

    it('migrate tuiBlurNativeFocused to tuiBlurFocused', async () => {
        const {component} = await runMigration({
            collection,
            component: `
import {tuiBlurNativeFocused} from '@taiga-ui/cdk';

tuiBlurNativeFocused(document);
`,
        });

        expect(component).toEqual(`
import {tuiBlurFocused} from '@taiga-ui/cdk';

tuiBlurFocused(document);
`);
    });

    afterEach(() => resetActiveProject());
});
