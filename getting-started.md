# Getting started

## Automatic install Taiga UI (recommended)

To install the Taiga UI, you can use the command below. This command will automatically install and add the
library to your project, and configure it:

```
ng add taiga-ui
```

```bash
npm i taiga-ui
nx g taiga-ui:ng-add
```

**Note:**
If you want to add Taiga UI to a project that is not using the latest major version of Angular, make sure to
install the appropriate version of
`@angular/cdk`
and
`@angular/animations`
first to prevent dependency conflicts.

## Manual

Use this guide to install Taiga UI manually:

- Install libraries

- Include styles

- Root component

- Providers

- Icons

## 1. Install libraries

```bash
npm i @taiga-ui/{cdk,core,kit,icons}
```

```bash
npm i @taiga-ui/addon-charts    // Components for various charts, graphs and visualizations
npm i @taiga-ui/addon-commerce  // Money-related extension with currencies, credit card inputs and validators
npm i @taiga-ui/addon-mobile    // Components and tools specific to mobile version of the app
npm i @taiga-ui/addon-table     // Interactive table component and related utilities
npm i @taiga-ui/addon-doc       // Taiga UI based library for developing documentation portals for Angular libraries
npm i @taiga-ui/layout          // Layout components
```

## 2. Include styles

```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "@taiga-ui/core/styles/taiga-ui-theme.less",
              "@taiga-ui/core/styles/taiga-ui-fonts.less",
              "@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less" // optional
            ]
          }
        }
      }
    }
  }
}
```

```json
{
  "targets": {
    "build": {
      "options": {
        "styles": [
          "@taiga-ui/core/styles/taiga-ui-theme.less",
          "@taiga-ui/core/styles/taiga-ui-fonts.less",
          "@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less" // optional
        ]
      }
    }
  }
}
```

```ts
@Component({
  //...,
  styleUrls: ['./my.component.scss', './my.component.less'],
})
export class Example {}
```

```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

// other styles
```

## 3. Root component

```ts
import {TuiRoot} from '@taiga-ui/core';
// ..

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    TuiRoot,
    // ...
  ],
  templateUrl: './app.component.html',
})
export class App {}
```

```html
<tui-root>
  <!-- content of your app -->

  <!--
     If you need, you can add something between Taiga portal layers:
    -->
  <ng-container ngProjectAs="tuiOverContent">
    <!-- Content over app content -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverDialogs">
    <!-- Content over dialogs -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverAlerts">
    <!-- Content over alerts -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverDropdowns">
    <!-- Content over dropdowns -->
  </ng-container>
  <ng-container ngProjectAs="tuiOverHints">
    <!-- Content over hints -->
  </ng-container>
</tui-root>
```

## 4. Providers

```ts
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
// ...

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideEventPlugins(),
    //...
  ],
}).catch((err) => console.error(err));
```

## 5. Icons

```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          // ...
          "assets": [
            {
              "glob": "**/*",
              "input": "node_modules/@taiga-ui/icons/src",
              "output": "assets/taiga-ui/icons"
            }
          ]
        }
      }
    }
  }
}
```

```json
{
  "targets": {
    "build": {
      "options": {
        // ...
        "assets": [
          {
            "glob": "**/*",
            "input": "node_modules/@taiga-ui/icons/src",
            "output": "assets/taiga-ui/icons"
          }
        ]
      }
    }
  }
}
```

## Update/migration Taiga UI

Updating Taiga packages to the latest version:

```
ng update @taiga-ui/cdk
```

```bash
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

## AI-Ready

Taiga UI treats AI agents as first-class readers of its documentation. The same knowledge is published in
AI-friendly shapes — a flat
`llms.txt`
context file, an MCP server, and reusable agent skills — so your assistant reads, understands, and generates
components against the current, version-correct API instead of guessing from memory.

Explore AI tools
