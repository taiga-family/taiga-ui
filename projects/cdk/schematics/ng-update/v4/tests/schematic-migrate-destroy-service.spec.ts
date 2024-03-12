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
import {join} from 'path';

const collectionPath = join(__dirname, '../../../migration.json');

const BEFORE = `
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    private stop$ = inject(TuiDestroyService);

    constructor(
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        private readonly oneMoreService: TuiHoveredService,
        private oldWayDestroy: TuiDestroyService,
    ) {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => console.info('click'));

        fromEvent(inject(ElementRef).nativeElement, 'blur')
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info('blur'));
    }

    ngOnInit() {
        timer(3000).pipe(takeUntil(this.stop$)).subscribe();
    }
}`.trim();

const AFTER = `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        private readonly oneMoreService: TuiHoveredService
    ) {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('click'));

        fromEvent(inject(ElementRef).nativeElement, 'blur')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('blur'));
    }

    ngOnInit() {
        timer(3000).pipe(takeUntilDestroyed()).subscribe();
    }
}`.trim();

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('test/app/test.component.ts', BEFORE);

        saveActiveProject();
    });

    it('should migrate TuiDestroyService to takeUntilDestroyed (from `@angular/core/rxjs-interop`)', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const modifiedFile = tree.readContent('test/app/test.component.ts');

        expect(modifiedFile).toEqual(AFTER);
    });

    afterEach(() => resetActiveProject());
});
