# Getting started

To install the Taiga UI use the command below. This command will automatically add the library to your
project and configure it.

## Install Taiga UI

```bash
npm i taiga-ui
nx g taiga-ui:ng-add
```

## Update to the latest version

```bash
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

## Explore Taiga UI

See
**Components**
section in the main navigation and check out UI elements broken into dedicated groups by their purpose

Form

Inputs, buttons, checkboxes, error messages and other components to build forms

Layout
Cards, containers, lists and other components to build application layout

Navigation

Tabs, breadcrumbs, pagination, stepper and other components that handle app navigation

## AI-Ready

Taiga UI treats AI agents as first-class readers of its documentation. The same knowledge is published
in AI-friendly shapes — a flat
`llms.txt`
context file, an MCP server, and reusable agent skills — so your assistant reads, understands, and
generates components against the current, version-correct API instead of guessing from memory.

Explore AI tools

## Install libraries

**Main packages**

```bash
npm i @taiga-ui/{cdk,core,kit,icons}
```

**Addons (optional)**

```bash
npm i @taiga-ui/addon-charts    // Components for various charts, graphs and visualizations
npm i @taiga-ui/addon-commerce  // Money-related extension with currencies, credit card inputs and validators
npm i @taiga-ui/addon-mobile    // Components and tools specific to mobile version of the app
npm i @taiga-ui/addon-table     // Interactive table component and related utilities
npm i @taiga-ui/addon-doc       // Taiga UI based library for developing documentation portals for Angular libraries
npm i @taiga-ui/layout          // Layout components
```

## Include styles

**angular.json**

```json
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "@taiga-ui/styles/taiga-ui-theme.less",
              "@taiga-ui/styles/taiga-ui-fonts.less",
              "@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less" // optional
            ]
          }
        }
      }
    }
  }
}
```

**project.json (Nx)**

```json
{
  "targets": {
    "build": {
      "options": {
        "styles": [
          "@taiga-ui/styles/taiga-ui-theme.less",
          "@taiga-ui/styles/taiga-ui-fonts.less",
          "@taiga-ui/addon-mobile/styles/taiga-ui-mobile.less" // optional
        ]
      }
    }
  }
}
```

## Add icons

**angular.json**

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

**project.json (Nx)**

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

## Root component

**app.component.ts**

```ts
import {TuiRoot} from '@taiga-ui/core';
// ..

@Component({
  selector: 'app-root',
  imports: [
    TuiRoot,
    // ...
  ],
  templateUrl: './app.component.html',
})
export class App {}
```

**app.component.html**

```html
<tui-root>
  <!-- content of your app -->
  <ng-container ngProjectAs="tuiOverContent">
    <!-- Content over app content in the portal layer -->
  </ng-container>
</tui-root>
```

## Provide config

**main.ts**

```ts
import {provideTaiga} from '@taiga-ui/core';
// ...

bootstrapApplication(App, {
  providers: [
    provideTaiga(),
    //...
  ],
}).catch(console.error);
```

## Server Side Rendering

If you want to use SSR with Taiga UI you need to install
`@ng-web-apis/universal`
package. It has advanced mocks and tools to extract user agent and location info from server
side requests.

**main.server.ts**

```ts
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {mergeApplicationConfig, type ApplicationRef} from '@angular/core';
import {provideServerRendering} from '@angular/platform-server';
import {provideUniversal} from '@ng-web-apis/universal';

import {appConfig} from './app.config';

const serverConfig = mergeApplicationConfig(appConfig, {
  providers: [provideServerRendering(), provideUniversal()],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
  bootstrapApplication(App, serverConfig, context);
```

Taiga UI is configured with the
`provideTaiga`
helper that you add to your global providers. It accepts the following object:

```ts
export interface TuiOptions {
  // Omit to use OS theme, this is the default
  readonly mode?: 'dark' | 'light';
  // Scale text with OS font size, enabled by default
  readonly fontScaling: boolean;
  // Global window scrollbars, 'custom' by default
  readonly scrollbars: 'custom' | 'native';
  // Opt-in to experimental features as they are introduced, 'stable' by default
  readonly apis: 'stable' | {all: boolean} | Record<string, boolean>;
}
```

## Dark theme

To keep your theme consistent, especially with SSR, add the following script to your index.html

```html
<!doctype html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
  <script>
    // Or whatever key you provided to TUI_DARK_MODE_KEY
    const theme = localStorage?.getItem('tuiDark');

    if (theme === 'true' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.setAttribute('tuiTheme', 'dark');
    }
  </script>
</html>
```

## Stackblitz
