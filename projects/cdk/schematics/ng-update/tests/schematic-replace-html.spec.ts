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

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const COMPONENT_WITH_TEMPLATE_URL_AFTER = `import { TUI_EDITOR_EXTENSIONS, defaultEditorExtensions } from "@taiga-ui/addon-editor";

@Component({templateUrl: './test.template.html',
        providers: [{
                        provide: TUI_EDITOR_EXTENSIONS,
                        useValue: defaultEditorExtensions
                    }]
    })
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<tui-field-error formControlName="control"></tui-field-error>
<tui-field-error formControlName="control" [order]="order"></tui-field-error>

<table>
  <thead>
        <tr tuiThGroup>
            <th
                tuiResizableColumn
            >
                Name
            </th>
            <th tuiTh>Balance</th>
        </tr>
  </thead>
</table>
<tui-editor new [formControl]="control">
    <ng-container ngProjectAs="tools">
        <smiles-tool tuiToolbarTool></smiles-tool>
    </ng-container>
</tui-editor>
<tui-editor [formControl]="control"></tui-editor>
<tui-group class="some_class">
    <div class="content"></div>
</tui-group>

<tui-wrapper
    [appearance]="appearance"
    [disabled]="computedDisabled"
    [focused]="computedFocusVisible"
    [hovered]="computedHovered"
    [pressed]="computedPressed"
    [invalid]="computedInvalid"
>any</tui-wrapper>

<tui-primitive-textfield
    (autofilledChange)="onAutofilledChange($event)">
</tui-primitive-textfield>

<div tuiWrapper
    [hover]="computedHovered"
>any</div>

<tui-select (hoveredChange)="onHoverChange(event$)"></tui-select>
<button tuiButton (pressedChange)="onPressChange($event)"></button>
<tui-breadcrumbs [items]="items$ | async">
</tui-breadcrumbs>

<a
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [scrollIntoView]="isActive(item)">
    {{ item.name }}
</a>

<div
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [scrollIntoView]="isActive(item)">
    {{ item.name }}
</div>

<etc
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [scrollIntoView]="isActive(item)">
    {{ item.name }}
</etc>

<tui-multi-select
    #component
    [formControl]="testValue"
    (searchChange)="onSearchChange($event)"
>
    Rock Star Frontend Developers
    <tui-data-list-wrapper
        *tuiDataList
        [items]="items$ | async | tuiHideSelected : component"
        [itemContent]="itemContent"
    ></tui-data-list-wrapper>
</tui-multi-select>

<tui-multi-select #component [(ngModel)]="value">
    <tui-data-list *tuiDataList>
        <tui-opt-group
            tuiMultiSelectGroup
            label="Jedi"
        >
            <button
                *ngFor="let item of jedi"
                tuiOption
                [value]="item"
            >
                {{item}}
            </button>
        </tui-opt-group>
        <tui-opt-group label="Sith">
            <button
                *ngFor="let item of sith | tuiHideSelected:component"
                tuiOption
                [value]="item"
            >
                {{item}}
            </button>
        </tui-opt-group>
    </tui-data-list>
</tui-multi-select>

<tui-tabs-with-more
    [itemsLimit]="3"
    [(activeItemIndex)]="activeItemIndex"
>
    <button *tuiTab tuiTab>Maps</button>
    <button
        *tuiTab
        tuiTab
    >
        Calls
    </button>
</tui-tabs-with-more>

<tui-breadcrumbs>
    <ng-container *ngFor="let item of items">
        <a
            *tuiBreadcrumb
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    </ng-container>
</tui-breadcrumbs>
`;

const TEMPLATE_AFTER = `
<tui-error [error]="[] | tuiFieldError | async" formControlName="control"></tui-error>
<tui-error [error]="order | tuiFieldError | async" formControlName="control"></tui-error>

<table>
  <thead>
        <tr tuiThGroup>
            <th
                tuiTh [resizable]="true"
            >
                Name
            </th>
            <th tuiTh>Balance</th>
        </tr>
  </thead>
</table>
<tui-editor  [formControl]="control">
    <ng-container ngProjectAs="tools">
        <smiles-tool tuiItem></smiles-tool>
    </ng-container>
</tui-editor>
<tui-editor [formControl]="control"></tui-editor>
<div tuiGroup class="some_class">
    <div class="content"></div>
</div>

<div tuiWrapper
    [appearance]="appearance"
    [disabled]="computedDisabled"
    [focus]="computedFocusVisible"
    [hover]="computedHovered"
    [active]="computedPressed"
    [invalid]="computedInvalid"
>any</div>

<tui-primitive-textfield
    (tuiAutofilledChange)="onAutofilledChange($event)">
</tui-primitive-textfield>

<div tuiWrapper
    [hover]="computedHovered"
>any</div>

<tui-select (tuiHoveredChange)="onHoverChange(event$)"></tui-select>
<button tuiButton (tuiPressedChange)="onPressChange($event)"></button>
<tui-breadcrumbs>
    <ng-container *ngFor="let item of items$ | async">
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    </ng-container>
</tui-breadcrumbs>

<a
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [tuiScrollIntoViewLink]="isActive(item)">
    {{ item.name }}
</a>

<div
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [tuiScrollIntoViewLink]="isActive(item)">
    {{ item.name }}
</div>

<etc
    *ngFor="let item of pages"
    tuiLink
    [routerLink]="item.route"
    [tuiScrollIntoViewLink]="isActive(item)">
    {{ item.name }}
</etc>

<tui-multi-select
    #component
    [formControl]="testValue"
    (searchChange)="onSearchChange($event)"
>
    Rock Star Frontend Developers
    <tui-data-list-wrapper
        *tuiDataList
        [items]="items$ | async | tuiHideSelected"
        [itemContent]="itemContent"
    ></tui-data-list-wrapper>
</tui-multi-select>

<tui-multi-select #component [(ngModel)]="value">
    <tui-data-list *tuiDataList>
        <tui-opt-group
            tuiMultiSelectGroup
            label="Jedi"
        >
            <button
                *ngFor="let item of jedi"
                tuiOption
                [value]="item"
            >
                {{item}}
            </button>
        </tui-opt-group>
        <tui-opt-group label="Sith">
            <button
                *ngFor="let item of sith | tuiHideSelected"
                tuiOption
                [value]="item"
            >
                {{item}}
            </button>
        </tui-opt-group>
    </tui-data-list>
</tui-multi-select>

<tui-tabs-with-more
    [itemsLimit]="3"
    [(activeItemIndex)]="activeItemIndex"
>
    <button *tuiItem tuiTab>Maps</button>
    <button
        *tuiItem
        tuiTab
    >
        Calls
    </button>
</tui-tabs-with-more>

<tui-breadcrumbs>
    <ng-container *ngFor="let item of items">
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    </ng-container>
</tui-breadcrumbs>
`;

const COMPONENT_BEFORE = `
@Component({template: '<tui-group><div></div></tui-group>'})
export class TestComponentInline {
    aware = TUI_MOBILE_AWARE;
}
`;

const COMPONENT_AFTER = `
@Component({template: '<div tuiGroup><div></div></div>'})
export class TestComponentInline {
    aware = TUI_MOBILE_AWARE;
}
`;

const MODULE_BEFORE = `
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFieldErrorModule} from "@taiga-ui/kit";
import {ScrollIntoViewModule} from "@taiga-ui/addon-doc";

import {TestComponentInline} from './test-inline.component';
import {TestComponent} from './test.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFieldErrorModule,
        ScrollIntoViewModule
    ],
    declarations: [
        TestComponent,
        TestComponentInline
    ],
    exports: [TestComponent],
})
export class ExampleModule {}
`;

const MODULE_AFTER = `import { TuiErrorModule } from "@taiga-ui/core";
import { TuiAutofilledModule, TuiPressedModule, TuiHoveredModule } from "@taiga-ui/cdk";
import { TuiFieldErrorPipeModule } from "@taiga-ui/kit";

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { TuiScrollIntoViewLinkModule } from "@taiga-ui/addon-doc";

import {TestComponentInline} from './test-inline.component';
import {TestComponent} from './test.component';

@NgModule({
    imports: [
        CommonModule,
        TuiFieldErrorPipeModule,
        TuiAutofilledModule,
        TuiPressedModule,
        TuiHoveredModule,
        TuiScrollIntoViewLinkModule,
        TuiErrorModule
    ],
    declarations: [
        TestComponent,
        TestComponentInline
    ],
    exports: [TestComponent],
})
export class ExampleModule {}
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

    it('should edit templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should edit components', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.component.ts')).toEqual(
            COMPONENT_WITH_TEMPLATE_URL_AFTER,
        );
    });

    it('should add directive to module', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.module.ts')).toEqual(MODULE_AFTER);
    });

    it('should edit inline templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test-inline.component.ts')).toEqual(
            COMPONENT_AFTER,
        );
    });

    it('should add font style in angular.json', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('angular.json')).toEqual(
            `
{
  "version": 1,
  "defaultProject": "demo",
  "projects": {
    "demo": {
        "architect": {
          "build": {
            "options": {
              "main": "test/main.ts",
            "styles": [
              "node_modules/@taiga-ui/core/styles/taiga-ui-fonts.less"
            ]
            }
          }
        }
    }
  }
}`,
        );
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createSourceFile('test/app/test-inline.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.module.ts', MODULE_BEFORE);

    createAngularJson();
}
