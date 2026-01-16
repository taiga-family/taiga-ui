import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const COMPONENT_BEFORE = `
import {Component} from '@angular/core';
import {TuiAccordion} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './test.html',
})
export class Test {}
`;

const COMPONENT_AFTER = `import { TuiAccordion } from "@taiga-ui/kit";

import {Component} from '@angular/core';

@Component({
    standalone: true,
    imports: [TuiAccordion],
    templateUrl: './test.html',
})
export class Test {}
`;

const TEMPLATE_BEFORE = `
<tui-accordion class="container">
  <tui-accordion-item>
    Taiga UI cdk
    <ng-template tuiAccordionItemContent>
      Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities
    </ng-template>
  </tui-accordion-item>
  <tui-accordion-item>
    Taiga UI core
    <ng-template tuiAccordionItemContent>
      <div #content>Basic elements needed to develop components, directives and more using Taiga UI design system</div>
    </ng-template>
  </tui-accordion-item>
  <tui-accordion-item>
    Taiga UI kit
    <ng-template tuiAccordionItemContent>
      The main set of components used to build Taiga UI based Angular applications
    </ng-template>
  </tui-accordion-item>
</tui-accordion>
`;

const TEMPLATE_AFTER = `
<tui-accordion class="container">
  <button tuiAccordion>Taiga UI cdk</button>
  <tui-expand>
    Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities
  </tui-expand>
  <button tuiAccordion>Taiga UI core</button>
  <tui-expand>
    <div #content>Basic elements needed to develop components, directives and more using Taiga UI design system</div>
  </tui-expand>
  <button tuiAccordion>Taiga UI kit</button>
  <tui-expand>
    The main set of components used to build Taiga UI based Angular applications
  </tui-expand>
</tui-accordion>
`;

describe('ng-update accordion item migration', () => {
    it('replaces tui-accordion-item with button and tui-expand', async () => {
        const {component, template} = await runMigration({
            collection: join(__dirname, '../../../migration.json'),
            component: COMPONENT_BEFORE,
            template: TEMPLATE_BEFORE,
        });

        expect(component).toBe(COMPONENT_AFTER);
        expect(template).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => resetActiveProject());
});
