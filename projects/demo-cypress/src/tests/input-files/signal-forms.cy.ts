/*
// TODO: Uncomment the whole file when the `@angular/forms/signals` entry point becomes available,
// when Taiga UI drops support of Angular below 22 (stable API for signal forms appeared in Angular 22)
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    signal,
    type Type,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {form, FormField, requiredError, validate} from '@angular/forms/signals';
import {TuiRoot} from '@taiga-ui/core';
import {type TuiFileLike, TuiFiles} from '@taiga-ui/kit';

describe('tuiInputFiles + signal forms', () => {
    describe('invalid decoration', () => {
        const FILE: TuiFileLike = {
            name: 'report.pdf',
            size: 1024,
            type: 'application/pdf',
        };

        @Component({
            imports: [FormField, TuiFiles, TuiRoot],
            template: `
                <tui-root>
                    <label
                        style="inline-size: 15rem"
                        tuiInputFiles
                    >
                        <input
                            multiple
                            tuiInputFiles
                            [formField]="$any(f.files)"
                        />
                    </label>

                    <div style="margin-block-start: 1rem">
                        <output id="touched">{{ f.files().touched() }}</output>
                        <output id="invalid">{{ f.files().invalid() }}</output>

                        <button
                            id="mark-touched"
                            type="button"
                            (click)="f().markAsTouched()"
                        >
                            Mark as touched
                        </button>

                        <button
                            id="set-valid"
                            type="button"
                            (click)="f.files().value.set([file])"
                        >
                            Set valid value
                        </button>
                    </div>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Sandbox {
            public readonly file = FILE;
            public readonly model = signal<{files: readonly TuiFileLike[]}>({files: []});

            public readonly f = form(this.model, (path) => {
                validate(path.files, ({value}) =>
                    value().length ? null : requiredError(),
                );
            });
        }

        function snapshot(name: string): void {
            cy.get('label[tuiInputFiles]').compareSnapshot({
                name: `tuiInputFiles-${name}`,
                cypressScreenshotOptions: {padding: 8},
            });
        }

        beforeEach(() => {
            cy.viewport(400, 200);
            cy.mount(Sandbox);
            cy.get('input[tuiInputFiles]').as('input');
        });

        it('invalid but untouched => no invalid decoration', () => {
            cy.get('#invalid').should('have.text', 'true');
            cy.get('#touched').should('have.text', 'false');

            cy.get('@input').should('not.have.attr', 'data-mode', 'invalid');

            snapshot('untouched-invalid');
        });

        it('external markAsTouched() => invalid decoration appears', () => {
            cy.get('#mark-touched').click();

            cy.get('#touched').should('have.text', 'true');
            cy.get('@input').should('have.attr', 'data-mode', 'invalid');

            snapshot('touched-invalid');
        });

        it('valid value => decoration is dropped again', () => {
            cy.get('#mark-touched').click();
            cy.get('@input').should('have.attr', 'data-mode', 'invalid');

            cy.get('#set-valid').click();

            cy.get('#invalid').should('have.text', 'false');
            cy.get('@input').should('not.have.attr', 'data-mode', 'invalid');

            snapshot('valid-again');
        });
    });

    describe('(reject)', () => {
        const MAX_FILE_SIZE = 1024;

        const NOT_AN_IMAGE = {
            contents: new Uint8Array(3),
            fileName: 'notes.txt',
            mimeType: 'text/plain',
        };

        const SMALL_IMAGE = {
            contents: new Uint8Array(3),
            fileName: 'avatar.png',
            mimeType: 'image/png',
        };

        const HUGE_IMAGE = {
            contents: new Uint8Array(MAX_FILE_SIZE * 2),
            fileName: 'poster.png',
            mimeType: 'image/png',
        };

        @Directive()
        abstract class RejectSandbox {
            public readonly maxFileSize = MAX_FILE_SIZE;
            public readonly rejected = signal<readonly TuiFileLike[]>([]);

            public abstract readonly accepted: () => readonly TuiFileLike[];

            protected keepAccepted(
                files: readonly TuiFileLike[],
            ): readonly TuiFileLike[] {
                return files.filter((file) => !this.rejected().includes(file));
            }
        }

        @Component({
            imports: [FormField, TuiFiles, TuiRoot],
            template: `
                <tui-root>
                    <label
                        style="inline-size: 15rem"
                        tuiInputFiles
                    >
                        <input
                            accept="image/*"
                            multiple
                            tuiInputFiles
                            [formField]="$any(f.files)"
                            [maxFileSize]="maxFileSize"
                            (reject)="rejected.set($event)"
                        />
                    </label>

                    <tui-files id="accepted">
                        @for (file of accepted(); track file.name) {
                            <tui-file [file]="file" />
                        }
                    </tui-files>

                    <tui-files id="rejected">
                        @for (file of rejected(); track file.name) {
                            <tui-file
                                state="error"
                                [file]="file"
                            />
                        }
                    </tui-files>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class RejectSignalFormsSandbox extends RejectSandbox {
            public readonly model = signal<{files: readonly TuiFileLike[]}>({files: []});
            public readonly f = form(this.model);

            public readonly accepted = computed(() =>
                this.keepAccepted(this.model().files),
            );
        }

        @Component({
            imports: [ReactiveFormsModule, TuiFiles, TuiRoot],
            template: `
                <tui-root>
                    <label
                        style="inline-size: 15rem"
                        tuiInputFiles
                    >
                        <input
                            accept="image/*"
                            multiple
                            tuiInputFiles
                            [formControl]="control"
                            [maxFileSize]="maxFileSize"
                            (reject)="rejected.set($event)"
                        />
                    </label>

                    <tui-files id="accepted">
                        @for (file of accepted(); track file.name) {
                            <tui-file [file]="file" />
                        }
                    </tui-files>

                    <tui-files id="rejected">
                        @for (file of rejected(); track file.name) {
                            <tui-file
                                state="error"
                                [file]="file"
                            />
                        }
                    </tui-files>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class RejectReactiveFormsSandbox extends RejectSandbox {
            public readonly control = new FormControl<readonly TuiFileLike[]>([], {
                nonNullable: true,
            });

            private readonly value = toSignal(this.control.valueChanges, {
                initialValue: this.control.value,
            });

            public readonly accepted = computed(() => this.keepAccepted(this.value()));
        }

        const SANDBOXES: ReadonlyArray<{
            readonly component: Type<RejectSandbox>;
            readonly title: string;
        }> = [
            {component: RejectSignalFormsSandbox, title: '[formField] (signal forms)'},
            {component: RejectReactiveFormsSandbox, title: '[formControl] (reactive forms)'},
        ];

        SANDBOXES.forEach(({component, title}) => {
            describe(title, () => {
                beforeEach(() => {
                    cy.viewport(400, 300);
                    cy.mount(component);
                    cy.get('input[tuiInputFiles]').as('input');
                });

                it('a file of the wrong format is shown as rejected, not as accepted', () => {
                    cy.get('@input').selectFile(NOT_AN_IMAGE, {force: true});

                    cy.get('#rejected tui-file').should('have.length', 1);
                    cy.get('#rejected tui-file').should('contain.text', 'notes');
                    cy.get('#accepted tui-file').should('have.length', 0);
                });

                it('a file over the size limit is shown as rejected, not as accepted', () => {
                    cy.get('@input').selectFile(HUGE_IMAGE, {force: true});

                    cy.get('#rejected tui-file').should('have.length', 1);
                    cy.get('#rejected tui-file').should('contain.text', 'poster');
                    cy.get('#accepted tui-file').should('have.length', 0);
                });

                it('a bad file picked after a good one does not join the accepted list', () => {
                    cy.get('@input').selectFile(SMALL_IMAGE, {force: true});

                    cy.get('#accepted tui-file').should('have.length', 1);
                    cy.get('#rejected tui-file').should('have.length', 0);

                    cy.get('@input').selectFile(NOT_AN_IMAGE, {force: true});

                    cy.get('#rejected tui-file').should('have.length', 1);
                    cy.get('#accepted tui-file').should('have.length', 1);
                    cy.get('#accepted tui-file').should('contain.text', 'avatar');
                });
            });
        });
    });
});
*/
// eslint-disable-next-line unicorn/no-empty-file
