import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page [header]="\`Guide to update Taiga UI v\${tuiMajor - 1}\xA0->\xA0v\${tuiMajor}\`">
    <ng-template pageTab>
        <tui-doc-example
            heading="Before you update"
            [fullsize]="true"
            [preview]="false"
        >
            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                Use Node.js LTS, NPM v10 or higher.
            </label>

            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                Update Taiga UI version to
                <a
                    rel="noreferrer noopener"
                    target="_blank"
                    tuiLink
                    [href]="\`https://www.npmjs.com/package/@taiga-ui/cdk/v/v\${tuiMajor - 1}-lts\`"
                >
                    latest v{{ tuiMajor - 1 }}.
                </a>
            </label>

            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                Update Angular version to v19 or higher.
            </label>

            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                Ensure Prettier\u2019s endOfLine option is set to auto for fix some issues with end of line after migration.
            </label>
        </tui-doc-example>

        <tui-doc-example
            heading="Updating"
            [fullsize]="true"
            [preview]="false"
        >
            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                Run migration schematics
            </label>

            <tui-doc-example
                [content]="runMigration"
                [preview]="false"
                [style.padding-block-start.rem]="1"
            />

            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                <span>
                    Review all changed code lines. Some of them contain new code comments (something like
                    <code>// TODO: (Taiga UI migration)</code>
                    ). In most cases these comments contain instructions how to manually migrate some deleted entities
                    by new alternative.
                </span>
            </label>

            <label tuiLabel>
                <input
                    tuiCheckbox
                    type="checkbox"
                    [ngModel]="false"
                />

                <span>
                    You can find out that your codebase now contains some imports from
                    <code>
                        <a
                            href="https://github.com/taiga-family/taiga-ui/tree/main/projects/legacy"
                            rel="noreferrer noopener"
                            target="_blank"
                            tuiLink
                        >
                            &#64;taiga-ui/legacy
                        </a>
                    </code>
                    . This package is a transitional state for many outdated entities before their full removal.
                    Everything you find inside this package in the {{ tuiMajor }}th major release will be removed in the
                    {{ tuiMajor + 1 }}th one. So, you can just continue to use them for a while. However, some of those
                    components already have modern alternatives \u2013 they will be marked by comment with
                    <code>&#64;deprecated</code>
                    tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace
                    them by new alternatives as soon as possible!
                </span>
            </label>
        </tui-doc-example>

        <tui-doc-example
            heading="Troubleshooting"
            [fullsize]="true"
            [preview]="false"
        >
            <tui-accordion>
                <button
                    id="unused-imports"
                    appearance=""
                    tuiAccordion
                    tuiAccordionTarget
                >
                    <tui-icon
                        appearance="neutral"
                        iconStart="@tui.circle-question-mark"
                        size="l"
                        tuiBadge
                    />

                    <div>
                        After running the migration schematics, I have a large amount of TypeScript errors
                        <code>TS6133: &lt;entityName&gt; is declared but its value is never read.</code>
                    </div>
                </button>
                <tui-expand>
                    <div
                        icon=""
                        size="l"
                        tuiNotification
                    >
                        We don't include any code formatting in our schematics on purpose. Otherwise, it will
                        drastically slow down the overall process of schematics execution. So, use well-optimized
                        prettier/eslint rules and power of your IDEs .

                        <p>
                            <b>If you are WebStorm user.</b>
                            Just make right click on the root folder with the codebase of your recently migrated
                            application. Choose
                            <a
                                href="https://blog.jetbrains.com/webstorm/2018/05/optimize-imports-in-webstorm/#optimize-all-imports"
                                rel="noreferrer noopener"
                                target="_blank"
                                tuiLink
                            >
                                <i>"Optimize\xA0imports"</i>
                            </a>
                            from the context menu. It will automatically remove all unused imports across all the files
                            in that folder.
                        </p>

                        <b>If you are Visual Studio Code user.</b>
                        Use an
                        <a
                            href="https://marketplace.visualstudio.com/items?itemName=bierner.folder-source-actions"
                            rel="noreferrer noopener"
                            target="_blank"
                            tuiLink
                        >
                            Folder\xA0source\xA0actions
                        </a>
                        extension to trigger built-in
                        <a
                            href="https://code.visualstudio.com/docs/languages/javascript#_organize-imports"
                            rel="noreferrer noopener"
                            target="_blank"
                            tuiLink
                        >
                            <i>Organize Imports</i>
                        </a>
                        action in all files recursively in the root folder with the codebase of your recently migrated
                        application.
                    </div>
                </tui-expand>
            </tui-accordion>

            <tui-accordion>
                <button
                    id="manual-install-transitive-peer-deps"
                    appearance=""
                    tuiAccordion
                    tuiAccordionTarget
                >
                    <tui-icon
                        appearance="neutral"
                        iconStart="@tui.circle-question-mark"
                        size="l"
                        tuiBadge
                    />

                    <div>
                        I use Yarn or cannot get rid of
                        <code>legacy-peer-deps</code>
                        and I need a workaround. Or, I ran
                        <code>npm install</code>
                        and got
                        <code>Could not resolve dependency</code>
                        (for
                        <code>ng-web-apis</code>
                        ,
                        <code>maskito</code>
                        ,
                        <code>ng-polymorpheus</code>
                        or
                        <code>ng-event-plugins</code>
                        packages)
                    </div>
                </button>
                <tui-expand>
                    <div
                        icon=""
                        size="l"
                        tuiNotification
                    >
                        Taiga UI depends on many other
                        <a
                            tuiLink
                            [routerLink]="routes.About"
                        >
                            Taiga Family packages
                        </a>
                        .
                        <br />
                        <br />
                        Yarn and NPM with enabled
                        <code>legacy-peer-deps</code>
                        config do not automatically install transitive peer dependencies. It means that you should
                        manage them
                        <strong>manually</strong>
                        . Explore
                        <code>package.json</code>
                        of every used Taiga UI package. Find their
                        <code>peerDependencies</code>
                        and ensure that they are installed and their versions are compatible with constraints from Taiga
                        libraries.
                    </div>
                </tui-expand>
            </tui-accordion>

            <tui-accordion>
                <button
                    id="nx-legacy-peer-deps-bug"
                    appearance=""
                    tuiAccordion
                    tuiAccordionTarget
                >
                    <tui-icon
                        appearance="neutral"
                        iconStart="@tui.circle-question-mark"
                        size="l"
                        tuiBadge
                    />

                    <div>
                        I ran
                        <code>nx migrate --run-migrations</code>
                        and got
                        <code>Cannot find module 'ts-morph'</code>
                        error, but my project uses NPM without
                        <code>legacy-peer-deps</code>
                    </div>
                </button>
                <tui-expand>
                    <div
                        icon=""
                        size="l"
                        tuiNotification
                    >
                        Command
                        <code>ng migrate</code>
                        has a known
                        <a
                            href="https://github.com/nrwl/nx/issues/26675"
                            rel="noreferrer noopener"
                            target="_blank"
                            tuiLink
                            [textContent]="'issue'"
                        ></a>
                        . Just run
                        <code>npm install</code>
                        again and run

                        <tui-doc-code
                            code="npm_config_legacy_peer_deps=false nx migrate --run-migrations"
                            class="tui-space_top-2"
                        />
                    </div>
                </tui-expand>
            </tui-accordion>

            <tui-accordion>
                <button
                    id="heap-out-of-memory"
                    appearance=""
                    tuiAccordion
                    tuiAccordionTarget
                >
                    <tui-icon
                        appearance="neutral"
                        iconStart="@tui.circle-question-mark"
                        size="l"
                        tuiBadge
                    />

                    <div>
                        Migration fails with
                        <code>FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory</code>
                    </div>
                </button>
                <tui-expand>
                    <div
                        icon=""
                        size="l"
                        tuiNotification
                    >
                        <div class="tui-space_bottom-4">
                            Migration schematics recursively traverse every file and directory. This operation can be
                            memory-intensive. If you encounter this error, try increasing the memory limit for the
                            Node.js process.
                        </div>

                        <div>
                            For example:
                            <p
                                icon=""
                                tuiNotification
                            >
                                The syntax for defining environment variables varies by OS and shell!
                                <br />
                                The command below is for Unix-based systems and Nx CLI.
                            </p>
                            <tui-doc-code code="NODE_OPTIONS=--max-old-space-size=8192 nx migrate --run-migrations" />
                        </div>

                        <p>
                            If the problem persists \u2013
                            <a
                                href="https://github.com/taiga-family/taiga-ui/issues/new?template=1-bug-report.yml"
                                rel="noreferrer noopener"
                                target="_blank"
                                tuiLink
                            >
                                report the issue
                            </a>
                        </p>
                    </div>
                </tui-expand>
            </tui-accordion>

            <tui-accordion>
                <button
                    id="manual-run-schematics"
                    appearance=""
                    tuiAccordion
                    tuiAccordionTarget
                >
                    <tui-icon
                        appearance="neutral"
                        iconStart="@tui.circle-question-mark"
                        size="l"
                        tuiBadge
                    />

                    <div>
                        I still have some problems with running the basic version of
                        <code>ng\xA0update</code>
                        /
                        <code>ng\xA0migrate</code>
                        command, I need an approach to execute all schematics manually
                    </div>
                </button>
                <tui-expand>
                    <div
                        icon=""
                        size="l"
                        tuiNotification
                    >
                        <ol class="tui-list tui-list_ordered">
                            <li class="tui-list__item">
                                Manually update all Taiga UI's packages to
                                <code>v{{ tuiMajor }}</code>
                                (i.e. just change versions inside your
                                <code>package.json</code>
                                by yourself without any console commands and then run
                                <code>npm install</code>
                                ).
                            </li>
                            <li class="tui-list__item">
                                Check that
                                <code>node_modules/&#64;taiga-ui/cdk/package.json</code>
                                contains the {{ tuiMajor }}th major version
                            </li>
                            <li class="tui-list__item">
                                Execute:
                                <tui-doc-code
                                    [code]="\`ng update @taiga-ui/cdk --migrate-only --from=\${tuiMajor - 1} --to=\${tuiMajor}\`"
                                />
                                or
                                <tui-doc-code [code]="manuallyTriggerNxMigration" />
                            </li>
                        </ol>
                    </div>
                </tui-expand>
            </tui-accordion>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{t as default};
