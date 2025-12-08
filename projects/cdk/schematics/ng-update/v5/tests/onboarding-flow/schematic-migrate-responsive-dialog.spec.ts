import {expect} from '@jest/globals';
import {resetActiveProject} from 'ng-morph';

import {runOnboardingMigration} from './utils';

describe('ng-update should migrate tuiOnboarding to tuiResponsiveDialog', () => {
    afterEach(() => resetActiveProject());

    const TS_STUB = `
import {Component} from '@angular/core';
@Component({
  selector: 'test',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
    protected readonly options = {};
    protected open = false;
}
`;
    const HTML_ONBOARDING_STUB =
        '<ng-template [tuiOnboardingOptions]="options" [(tuiOnboarding)]="open">...</ng-template>';

    it('should migrate external template referenced by templateUrl', async () => {
        const BEFORE = `
<ng-template
    let-observer
    [tuiOnboardingOptions]="options"
    [(tuiOnboarding)]="open"
>
    ...
</ng-template>
`;
        const AFTER = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="options"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const result = await runOnboardingMigration(TS_STUB, BEFORE);

        expect(result.html).toBe(AFTER);
    });

    it('should add options if only two-way binding is present', async () => {
        const BEFORE = `
<ng-template
    let-observer
    [(tuiOnboarding)]="open"
>
    ...
</ng-template>
`;
        const AFTER = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="{appearance: 'onboarding'}" [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const result = await runOnboardingMigration(TS_STUB, BEFORE);

        expect(result.html).toBe(AFTER);
    });

    it('should patch inline options object in template', async () => {
        const BEFORE = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="{bar: false, offset: 16}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const AFTER = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="{fullscreen: true, appearance: 'onboarding', bar: false, offset: 16}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const result = await runOnboardingMigration(TS_STUB, BEFORE);

        expect(result.html).toBe(AFTER);
    });

    it('should patch inline options conditional in template', async () => {
        const BEFORE = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="isMobile ? {bar: false, offset: 16} : {}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const AFTER = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="isMobile ? {fullscreen: true, appearance: 'onboarding', bar: false, offset: 16} : {appearance: 'onboarding'}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const result = await runOnboardingMigration(TS_STUB, BEFORE);

        expect(result.html).toBe(AFTER);
    });

    it('should migrate TypeScript options', async () => {
        const BEFORE = `import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
    protected readonly options = this.isMobile
        ? {bar: false, offset: this.isAndroid ? 0 : 16}
        : {};
}
`;
        const AFTER = `import { TuiResponsiveDialog } from "@taiga-ui/addon-mobile";
import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html',
    imports: [TuiResponsiveDialog]
})
export class ExampleComponent {
    protected readonly options = this.isMobile
            ? {fullscreen: true, appearance: 'onboarding', bar: false, offset: this.isAndroid ? 0 : 16} : {appearance: 'onboarding'};
}
`;
        const result = await runOnboardingMigration(BEFORE, HTML_ONBOARDING_STUB);

        expect(result.ts).toBe(AFTER);
    });

    it('should NOT add fullscreen if already present in TS conditional', async () => {
        const BEFORE = `import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
    protected readonly options = this.isMobile
        ? {bar: false, offset: this.isAndroid ? 0 : 16, fullscreen: true}
        : {};
}
`;
        const AFTER = `import { TuiResponsiveDialog } from "@taiga-ui/addon-mobile";
import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html',
    imports: [TuiResponsiveDialog]
})
export class ExampleComponent {
    protected readonly options = this.isMobile
            ? {appearance: 'onboarding', bar: false, offset: this.isAndroid ? 0 : 16, fullscreen: true} : {appearance: 'onboarding'};
}
`;
        const result = await runOnboardingMigration(BEFORE, HTML_ONBOARDING_STUB);

        expect(result.ts).toBe(AFTER);
    });

    it('should NOT add fullscreen if already present in template conditional', async () => {
        const BEFORE = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="isMobile ? {bar: false, offset: 16, fullscreen: true} : {}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const AFTER = `
<ng-template
    let-observer
    [tuiResponsiveDialogOptions]="isMobile ? {appearance: 'onboarding', bar: false, offset: 16, fullscreen: true} : {appearance: 'onboarding'}"
    [(tuiResponsiveDialog)]="open"
>
    ...
</ng-template>
`;
        const result = await runOnboardingMigration(TS_STUB, BEFORE);

        expect(result.html).toBe(AFTER);
    });

    it('should only add fullscreen to mobile branch in conditional', async () => {
        const BEFORE = `import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
    protected readonly options = this.isMobile
        ? {bar: false, offset: this.isAndroid ? 0 : 16}
        : {};
}
`;
        const AFTER = `import { TuiResponsiveDialog } from "@taiga-ui/addon-mobile";
import {Component} from '@angular/core';
import {TuiOnboardingFlow} from '@taiga-ui/proprietary';
@Component({
  selector: 'test',
  templateUrl: './example.component.html',
    imports: [TuiResponsiveDialog]
})
export class ExampleComponent {
    protected readonly options = this.isMobile
            ? {fullscreen: true, appearance: 'onboarding', bar: false, offset: this.isAndroid ? 0 : 16} : {appearance: 'onboarding'};
}
`;
        const result = await runOnboardingMigration(BEFORE, HTML_ONBOARDING_STUB);

        expect(result.ts).toBe(AFTER);
    });
});
