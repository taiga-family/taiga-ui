# Taiga UI — Doc

> Taiga UI based library for developing documentation portals for Angular libraries.

## How to use

1. Include `TuiDocMainModule` in your App module and use in your template:

    ```html
    <tui-doc-main>
        You can add content here, it will be shown below navigation in the sidebar
    </tui-doc-main>
    ```

2. Configure languages to highlight in your main module:

    ```typescript
    import * as typescript from 'highlight.js/lib/languages/typescript';
    import {HighlightLanguage} from 'ngx-highlightjs';

    /**
     * Import every language you wish to highlight here
     * NOTE: The name of each language must match the file name its imported from
     */
    export function hljsLanguages(): ReadonlyArray<HighlightLanguage> {
        return [{name: 'typescript', func: typescript}];
    }
    ```

    ```typescript
    import {NgModule} from '@angular/core';
    import {TuiDocMainModule} from '@taiga-ui/addon-doc';
    import {hljsLanguages} from './hljsLanguages';
    import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
    import {AppComponent} from './app.component';

    @NgModule({
        bootstrap: [AppComponent],
        imports: [TuiDocMainModule],
        declarations: [AppComponent],
        providers: [
            {
                provide: HIGHLIGHT_OPTIONS,
                useValue: {
                    languages: hljsLanguages,
                },
            },
        ],
    })
    export class AppBrowserModule {}
    ```

3. Configure documentation providers:

    `TUI_DOC_PAGES` — an array of pages, see `TuiDocPages` type

    `TUI_DOC_LOGO` — an src for the SVG logo in the sidebar

    `TUI_DOC_DEFAULT_TABS` — an array of default named for tabs on your typical page

    `TUI_DOC_TITLE` — a title prefix for the browser tab

    `TUI_DOC_SEE_ALSO` — a two dimensional array of related pages by their titles

4. Configure routing:

    ```typescript
    import {Routes} from '@angular/router';

    const appRoutes: Routes = [
        {
            path: 'super-page',
            loadChildren: '../super-page/super-page.module#SuperModule',
            data: {
                title: 'Super Page',
            },
        },
        // ...
    ];
    ```

    > You must have title in route data in order for `TUI_DOC_SEE_ALSO` to work.
    > It would also be automatically added to `TUI_DOC_TITLE` for browser tab title
    > when navigating to that route.

5. Create pages.

    _Module:_

    ```typescript
    import {NgModule} from '@angular/core';
    import {RouterModule} from '@angular/router';
    import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
    import {SuperComponent} from './super.component';

    @NgModule({
        imports: [
            ...TUI_DOC_PAGE_MODULES,
            RouterModule.forChild(generateRoutes(SuperComponent)),
        ],
        declarations: [SuperComponent],
        exports: [SuperComponent],
    })
    export class SuperModule {}
    ```

    _Component:_

    ```typescript
    import {Component} from '@angular/core';

    import {default as exampleHtml} from '!!raw-loader!./examples/1/index.html';
    import {default as exampleTs} from '!!raw-loader!./examples/1/index.ts';

    @Component({
        selector: 'super-component',
        templateUrl: './account.template.html',
    })
    export class SuperComponent {
        // Keys would be used as tabs for code example
        readonly example = {
            TypeScript: exampleTs,
            HTML: exampleHtml,
        };

        readonly inputVariants = ['input 1', 'input 2'];
    }
    ```

    _Template:_

    ```html
    <tui-doc-page header="Super" package="SUPER-PACKAGE" deprecated>
        <ng-template pageTab>
            <!-- default tab name would be used -->
            This would be the content of a first tab

            <tui-doc-example
                id="basic-example"
                heading="Example of usage"
                [content]="example"
            >
                <example-1></example-1>
            </tui-doc-example>
        </ng-template>

        <ng-template pageTab="Documentation">
            <tui-doc-demo>
                <super-component [input]="input"></super-component>
            </tui-doc-demo>
            <tui-doc-documentation>
                <ng-template
                    documentationPropertyName="input"
                    documentationPropertyMode="input"
                    documentationPropertyType="T"
                    [documentationPropertyValues]="inputVariants"
                    [(documentationPropertyValue)]="input"
                >
                    Some input
                </ng-template>
            </tui-doc-documentation>
        </ng-template>
    </tui-doc-page>
    ```
