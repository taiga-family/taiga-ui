# Taiga UI — Doc

[![npm version](https://img.shields.io/npm/v/@taiga-ui/addon-doc.svg)](https://npmjs.com/package/@taiga-ui/addon-doc)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@taiga-ui/addon-doc)](https://bundlephobia.com/result?p=@taiga-ui/addon-doc)
[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)

> Taiga UI based library for developing documentation portals for Angular libraries.

## How to install

Install main packages:

```bash
npm i @taiga-ui/{cdk,core,kit}
```

Install doc:

```bash
npm i @taiga-ui/addon-doc
```

## How to use

> You can also see [community made guide](https://habr.com/ru/company/europlan/blog/559804/) in Russian

1. Include `TuiDocMain` in your App imports and use in your template:

   ```html
   <tui-doc-main>You can add content here, it will be shown below navigation in the sidebar</tui-doc-main>
   ```

2. Configure languages to highlight in your root providers:

   ```typescript
   import {Component} from '@angular/core';
   import {TuiDocMain} from '@taiga-ui/addon-doc';
   import {provideHighlightOptions} from 'ngx-highlightjs';
   import {App} from './app.component';

   @Component({
     imports: [TuiDocMain],
     providers: [
       provideHighlightOptions({
         coreLibraryLoader: () => import('highlight.js/lib/core' as string),
         lineNumbersLoader: () => import('ngx-highlightjs/line-numbers' as string), // Optional, only if you want the line numbers
         languages: {
           typescript: () => import('highlight.js/lib/languages/typescript' as string),
           less: () => import('highlight.js/lib/languages/less' as string),
           xml: () => import('highlight.js/lib/languages/xml' as string),
         },
       }),
     ],
   })
   export class App {}
   ```

3. Configure documentation providers:

   `TUI_DOC_PAGES` — an array of pages, see `TuiDocPages` type

   `TUI_DOC_LOGO` — an src for the SVG logo in the sidebar

   `TUI_DOC_DEFAULT_TABS` — an array of default named for tabs on your typical page

   `TUI_DOC_TITLE` — a title prefix for the browser tab

   `TUI_DOC_SEE_ALSO` — a two dimensional array of related pages by their titles

   `TUI_DOC_SEARCH_ENABLED` — enable doc search. Default value is true

4. Configure routing:

   ```typescript
   import {Routes} from '@angular/router';

   const appRoutes: Routes = [
     {
       path: 'doc-page-1',
       loadComponent: async () => (await import('../doc-page-1')).DocPage,
       data: {
         title: 'Documentation page #1',
       },
     },
     // ...
   ];
   ```

   > You must have title in route data in order for `TUI_DOC_SEE_ALSO` to work. It would also be automatically added to
   > `TUI_DOC_TITLE` for browser tab title when navigating to that route.

5. Create pages.

   _Component:_

   ```ts
   // ..

   @Component({
     selector: 'first-doc-page',
     templateUrl: './super.component.html',
     imports: [TuiAddonDoc],
   })
   export class DocPage {
     // Keys would be used as tabs for code example
     readonly example = {
       // import a file as a string
       TypeScript: import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
       HTML: import('./examples/1/index.html', {with: {loader: 'text'}}),
       LESS: '.box { color: red }',
     };

     readonly inputVariants = ['input 1', 'input 2'];
   }
   ```

   > You can use any tool to import a file as a string. For example, you can use:
   >
   > - [Esbuild loaders](https://angular.dev/tools/cli/build-system-migration#file-extension-loader-customization)
   >   (recommended)
   > - [Webpack Asset Modules](https://webpack.js.org/guides/asset-modules)

   _Template:_

   ```html
   <tui-doc-page
     header="Super"
     package="SUPER-PACKAGE"
   >
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

       <table tuiDocAPI>
         <tr
           name="[input]"
           tuiDocAPIItem
           type="T"
           [items]="inputVariants"
           [(value)]="input"
         >
           Some input description
         </tr>
       </table>
     </ng-template>
   </tui-doc-page>
   ```
