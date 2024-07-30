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

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import {Component, inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'test',
    template: '',
})
export class Test {
    readonly alertService = inject(TuiAlertService);
    private alertParams = {
        status: 'error',
        autoClose: false,
        label: 'params in a separate property',
    };

    constructor(private readonly legacyWayService: TuiAlertService) {
        inject(TuiAlertService)
            .open('Inside injection context', {
                autoClose: true,
                status: 'warning',
                label: 'I will be closed in 3s',
            })
            .subscribe();
    }

    onClick() {
        this.alertService
            .open('Outside of an injection context', {
                autoClose: false,
                label: 'User should close me by himself',
                status: 'success',
            })
            .subscribe();
    }

    onClick2() {
        this.legacyWayService
            .open('Tricky case', this.alertParams)
            .subscribe();
    }

}`.trim();

const COMPONENT_AFTER = `
import {Component, inject} from '@angular/core';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'test',
    template: '',
})
export class Test {
    readonly alertService = inject(TuiAlertService);
    private alertParams = {
        appearance: 'error',
        autoClose: 0,
        label: 'params in a separate property',
    };

    constructor(private readonly legacyWayService: TuiAlertService) {
        inject(TuiAlertService)
            .open('Inside injection context', {
                autoClose: 3_000,
                appearance: 'warning',
                label: 'I will be closed in 3s',
            })
            .subscribe();
    }

    onClick() {
        this.alertService
            .open('Outside of an injection context', {
                autoClose: 0,
                label: 'User should close me by himself',
                appearance: 'success',
            })
            .subscribe();
    }

    onClick2() {
        this.legacyWayService
            .open('Tricky case', this.alertParams)
            .subscribe();
    }

}`.trim();

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

    it('should update `autoClose: true` => `autoClose: 3_000` & `autoClose: false` => `autoClose: 0`', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const componentBefore = tree.readContent('test/app/component.ts');

        expect(componentBefore).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/component.ts', COMPONENT_BEFORE);
    createSourceFile('package.json', '{}');
}
