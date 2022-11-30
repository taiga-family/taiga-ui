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

const BEFORE = `import { Component } from '@angular/core';
import { TuiPortalService } from '@taiga-ui/cdk';
import { PreviewDialogService } from '@taiga-ui/addon-preview';
import { TuiNotificationsService } from '@taiga-ui/core';
import { TuiCodeEditor } from '@taiga-ui/addon-doc';

function etc(service: TuiNotificationsService) {
    service
    .show().subscribe();

    let open = getService().show();
}

function getService(): TuiNotificationsService {
    return new TuiNotificationsService();
}

@Component({templateUrl: './app.template.html'})
export class AppComponent {
    constructor(
      @Inject(TuiPortalService) portalService: TuiPortalService,
      @Inject(TuiNotificationsService) private notificationService: TuiNotificationsService,
      @Inject(PreviewDialogService) private preview: PreviewDialogService,
      @Inject(TUI_DOC_CODE_EDITOR) private editor: TuiCodeEditor
    ) {
      notificationService.show(arg, arg2);
    }

    method(): void {
        this.notificationService.show(arg, arg2).subscribe();
        this.editor.open(arg1, arg2);
    }
}`;

const AFTER = `import { TuiPreviewDialogService } from "@taiga-ui/addon-preview";
import { TuiCodeEditor } from "@taiga-ui/addon-doc";
import { TuiAlertService } from "@taiga-ui/core";
import { TuiDropdownPortalService } from "@taiga-ui/cdk";
import { Component } from '@angular/core';

function etc(service: TuiAlertService) {
    service
    .open().subscribe();

    let open = getService().open();
}

function getService(): TuiAlertService {
    return new TuiAlertService();
}

@Component({templateUrl: './app.template.html'})
export class AppComponent {
    constructor(
      @Inject(TuiDropdownPortalService) portalService: TuiDropdownPortalService,
      @Inject(TuiAlertService) private notificationService: TuiAlertService,
      @Inject(TuiPreviewDialogService) private preview: TuiPreviewDialogService,
      @Inject(TUI_DOC_CODE_EDITOR) private editor: TuiCodeEditor
    ) {
      notificationService.open(arg, arg2);
    }

    method(): void {
        this.notificationService.open(arg, arg2).subscribe();
        this.editor.edit(arg1, arg2);
    }
}`;

describe(`ng-update`, () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner(`schematics`, collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it(`should replace services`, async () => {
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
