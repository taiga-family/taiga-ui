/* eslint-disable rxjs/no-topromise */
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

import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, `../../migration.json`);

const AFTER = `import { TuiAccountModule, TuiAccountComponent, TuiAccount, tuiAccountDelegate, TuiAccountDelegateComponent, CURRENCY_ICONS, TUI_ACCOUNT_PROJECTOR } from "@taiga-ui/proprietary-banking";

@Component({
    selector: 'tui-account-example-1',
    template: '',
})
export class TuiAccountExample1 extends TuiAccountComponent {
    readonly accountDelegate = tuiAccountDelegate;
    readonly accounts: TuiAccount[] = [];
    account = new FormControl(this.accounts[0]);

    constructor(
        @Inject(TUI_ACCOUNT_PROJECTOR)
        readonly mapper: TuiMapper<T, TuiAccount>,
    ) {}

    getIcon({icon, currency = TuiCurrency.Ruble}: TuiAccount): PolymorpheusContent {
        return icon ?? CURRENCY_ICONS[String(currency)] ?? \`tuiIconCurrencyDefaultMarker\`;
    }
}

@NgModule({
    imports: [TuiAccountModule],
    declarations: [TuiAccountExample1],
    entryComponents: [TuiAccountDelegateComponent]
})
export class ExampleTuiAccountModule {}
`;

const BEFORE = `import {
    TuiAccountModule,
    TuiAccountComponent,
    TuiAccount,
    tuiAccountDelegate,
    TuiAccountDelegateComponent,
    CURRENCY_ICONS,
    TUI_ACCOUNT_PROJECTOR
} from '@taiga-ui/proprietary-core';

@Component({
    selector: 'tui-account-example-1',
    template: '',
})
export class TuiAccountExample1 extends TuiAccountComponent {
    readonly accountDelegate = tuiAccountDelegate;
    readonly accounts: TuiAccount[] = [];
    account = new FormControl(this.accounts[0]);

    constructor(
        @Inject(TUI_ACCOUNT_PROJECTOR)
        readonly mapper: TuiMapper<T, TuiAccount>,
    ) {}

    getIcon({icon, currency = TuiCurrency.Ruble}: TuiAccount): PolymorpheusContent {
        return icon ?? CURRENCY_ICONS[String(currency)] ?? \`tuiIconCurrencyDefaultMarker\`;
    }
}

@NgModule({
    imports: [TuiAccountModule],
    declarations: [TuiAccountExample1],
    entryComponents: [TuiAccountDelegateComponent]
})
export class ExampleTuiAccountModule {}
`;

describe(`ng-update proprietary consts`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it(`should replace proprietary consts`, async () => {
        const tree = await runner
            .runSchematicAsync(
                `updateToV3`,
                {'skip-logs': process.env[`TUI_CI`] === `true`} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent(`test/app/app.component.ts`)).toEqual(AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(`test/app/app.component.ts`, BEFORE);

    createSourceFile(`test/app/app.template.html`, `<app></app>`);

    createAngularJson();
    createSourceFile(`package.json`, `{"dependencies": {"@angular/core": "~13.0.0"}}`);
}
