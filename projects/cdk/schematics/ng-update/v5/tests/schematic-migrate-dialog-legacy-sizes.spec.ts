import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiDialog legacy sizes', () => {
    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({
            component,
            collection,
        });

        return result;
    };

    it('moves tuiDialog import to @taiga-ui/legacy and adds TODO near size for legacy size `auto`', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    label: 'test',
                    size: 'auto',
                });
            }
        `);

        const expected = `
            import {Component} from '@angular/core';
import { tuiDialog } from "@taiga-ui/legacy";

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    label: 'test',
// TODO: (Taiga UI migration) legacy dialog size detected (deprecated size: 'auto', 'fullscreen', 'page'); migration only moved imports. Review this call.
                    size: 'auto',
                });
            }
        `;

        expect(result).toEqual(expected);
    });

    it('moves TuiDialogService import to @taiga-ui/legacy and adds TODO near size for legacy size `page`', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiDialogService).open('content', {size: \`page\`});
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
import { TuiDialogService } from "@taiga-ui/legacy";

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
// TODO: (Taiga UI migration) legacy dialog size detected (deprecated size: 'auto', 'fullscreen', 'page'); migration only moved imports. Review this call.
                    inject(TuiDialogService).open('content', {size: \`page\`});
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it("replaces size: 'fullscreen' with appearance: 'fullscreen' when appearance is not set", async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'fullscreen',
                    dismissible: true,
                });
            }
        `);

        const expected = `
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    appearance: 'fullscreen',
                    dismissible: true,
                });
            }
        `;

        expect(result).toEqual(expected);
    });

    it("removes size: 'fullscreen' for appearance: 'fullscreen'", async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'fullscreen',
                    appearance: 'fullscreen',
                });
            }
        `);

        const expected = `
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    appearance: 'fullscreen',
                });
            }
        `;

        expect(result).toEqual(expected);
    });

    it("uses legacy imports and adds TODO when size is 'fullscreen' but appearance is set to a non-fullscreen value", async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiDialogService).open('content', {
                        size: 'fullscreen',
                        appearance: 'custom',
                    });
                }
            }
        `);

        const expected = `
            import {Component, inject} from '@angular/core';
import { TuiDialogService } from "@taiga-ui/legacy";

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiDialogService).open('content', {
// TODO: (Taiga UI migration) legacy dialog size detected (deprecated size: 'auto', 'fullscreen', 'page'); migration only moved imports. Review this call.
                        size: 'fullscreen',
                        appearance: 'custom',
                    });
                }
            }
        `;

        expect(result).toEqual(expected);
    });

    it('moves tuiDialogOptionsProvider import to @taiga-ui/legacy and adds TODO near size for legacy size `auto`', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialogOptionsProvider} from '@taiga-ui/core';

            @Component({
                standalone: true,
                providers: [
                    tuiDialogOptionsProvider({
                        size: 'auto',
                        label: 'test',
                    }),
                ],
            })
            export class TestComponent {}
        `);

        const expected = `
            import {Component} from '@angular/core';
import { tuiDialogOptionsProvider } from "@taiga-ui/legacy";

            @Component({
                standalone: true,
                providers: [
                    tuiDialogOptionsProvider({
// TODO: (Taiga UI migration) legacy dialog size detected (deprecated size: 'auto', 'fullscreen', 'page'); migration only moved imports. Review this call.
                        size: 'auto',
                        label: 'test',
                    }),
                ],
            })
            export class TestComponent {}
        `;

        expect(result).toEqual(expected);
    });

    it('does not move imports and does not add TODO when size is not legacy', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog, TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'm',
                });

                constructor(private readonly s: TuiDialogService) {}
            }
        `);

        const expected = `
            import {Component} from '@angular/core';
            import {tuiDialog, TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    size: 'm',
                });

                constructor(private readonly s: TuiDialogService) {}
            }
        `;

        expect(result).toEqual(expected);
    });

    afterEach(() => resetActiveProject());
});
