import"./chunk-42JZD6NG.js";var i=`<tui-doc-page header="Migration Guide (v3\xA0->\xA0v4)">
    <section>
        <h2>Prerequisites</h2>
        <ul class="tui-list">
            <li class="tui-list__item">
                <a
                    href="https://angular.dev/update-guide"
                    target="_blank"
                    tuiLink
                >
                    Update Angular
                </a>
                version to
                <strong>v16</strong>
                or higher.
            </li>

            <li class="tui-list__item">
                Use npm
                <strong>v7</strong>
                or higher. Don't use
                <a
                    href="https://docs.npmjs.com/cli/v7/using-npm/config#legacy-peer-deps"
                    target="_blank"
                    tuiLink
                >
                    legacy-peer-deps
                </a>
                in your
                <code>.npmrc</code>
                -file or with
                <code>npm install</code>
                command.

                <div
                    tuiNotification
                    class="tui-space_top-2"
                >
                    If you use Yarn or cannot get rid of
                    <code>legacy-peer-deps</code>
                    flag \u2013 this step cannot be skipped, but you should be ready to make some
                    <strong>additional\xA0manual\xA0efforts</strong>
                    to resolve all transitive peer dependencies.

                    <p>
                        See
                        <a
                            fragment="manual-install-transitive-peer-deps"
                            routerLink="."
                            tuiLink
                        >
                            this\xA0guide
                        </a>
                        from
                        <strong>Troubleshooting</strong>
                        section.
                    </p>
                </div>
            </li>

            <li class="tui-list__item">
                Update all Taiga UI packages to the latest
                <a
                    href="https://www.npmjs.com/package/@taiga-ui/cdk/v/v3-lts"
                    target="_blank"
                    tuiLink
                >
                    v3
                </a>
                version.
            </li>

            <li class="tui-list__item">
                Ensure
                <a
                    href="https://prettier.io/docs/en/options.html#end-of-line"
                    target="_blank"
                    tuiLink
                >
                    Prettier\u2019s
                </a>
                <code>endOfLine</code>
                option is set to
                <code>auto</code>
                for fix some issues with end of line after migration.
            </li>
        </ul>
    </section>

    <section>
        <h2>Run migration schematics</h2>

        <p>
            This release introduces a lot of breaking changes. We put in a lot of effort to make updating easier for
            you. We wrote a bunch of schematics that automatically go through your entire project and fix most of the
            breaking changes.
        </p>

        <h3>Angular CLI</h3>
        <tui-doc-code code="ng update @taiga-ui/cdk" />

        <h3>Nx CLI</h3>
        <tui-doc-code code="nx migrate @taiga-ui/cdk" />
    </section>

    <section>
        <h2>Some final manual steps</h2>
        <ul class="tui-list">
            <li class="tui-list__item">
                Review all changed code lines. Some of them contain new code comments (something like
                <code>// TODO: (Taiga UI migration)</code>
                ). In most cases these comments contain instructions how to manually migrate some deleted entities by
                new alternative.
            </li>

            <li class="tui-list__item">
                You can find out that your codebase now contains some imports from
                <code>
                    <a
                        href="https://github.com/taiga-family/taiga-ui/tree/main/projects/legacy"
                        target="_blank"
                        tuiLink
                    >
                        &#64;taiga-ui/legacy
                    </a>
                </code>
                . This package is a transitional state for many outdated entities before their full removal. Everything
                you find inside this package in the fourth major release will be removed in the fifth one. So, you can
                just continue to use them for a while. However, some of those components already have modern
                alternatives \u2013 they will be marked by comment with
                <code>&#64;deprecated</code>
                tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace them by
                new alternatives as soon as possible!
            </li>
        </ul>
    </section>

    <section>
        <h2>Troubleshooting</h2>

        <tui-accordion>
            <button
                id="unused-imports"
                tuiAccordion
                tuiAccordionTarget
            >
                <div>
                    After running the migration schematics, I have a large amount of TypeScript errors
                    <code>TS6133: &lt;entityName&gt; is declared but its value is never read.</code>
                </div>
            </button>
            <tui-expand>
                We don't include any code formatting in our schematics on purpose. Otherwise, it will drastically slow
                down the overall process of schematics execution. So,
                <strong>use well-optimized prettier/eslint rules and power of your IDEs</strong>
                .

                <p>
                    <u>If you are WebStorm user.</u>
                    Just make right click on the root folder with the codebase of your recently migrated application.
                    Choose
                    <a
                        href="https://blog.jetbrains.com/webstorm/2018/05/optimize-imports-in-webstorm/#optimize-all-imports"
                        target="_blank"
                        tuiLink
                    >
                        <i>"Optimize\xA0imports"</i>
                    </a>
                    from the context menu. It will automatically remove all unused imports across all the files in that
                    folder.
                </p>

                <u>If you are Visual Studio Code user.</u>
                Use an
                <a
                    href="https://marketplace.visualstudio.com/items?itemName=bierner.folder-source-actions"
                    target="_blank"
                    tuiLink
                >
                    Folder\xA0source\xA0actions
                </a>
                extension to trigger built-in
                <a
                    href="https://code.visualstudio.com/docs/languages/javascript#_organize-imports"
                    target="_blank"
                    tuiLink
                >
                    <i>Organize Imports</i>
                </a>
                action in all files recursively in the root folder with the codebase of your recently migrated
                application.
            </tui-expand>
        </tui-accordion>

        <tui-accordion>
            <button
                id="manual-install-transitive-peer-deps"
                tuiAccordion
                tuiAccordionTarget
            >
                <div>
                    I use Yarn or cannot get rid of
                    <code>legacy-peer-deps</code>
                    . I need a workaround.
                    <br />
                    <br />
                    <hr />
                    <br />
                    I ran
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
                    packages).
                </div>
            </button>
            <tui-expand>
                Taiga UI depends on many other
                <a
                    tuiLink
                    [routerLink]="pages.Related"
                >
                    Taiga Family packages
                </a>
                .
                <br />
                <br />
                Yarn and NPM with enabled
                <code>legacy-peer-deps</code>
                config do not automatically install transitive peer dependencies. It means that you should manage them
                <strong>manually</strong>
                . Explore
                <code>package.json</code>
                of every used Taiga UI package. Find their
                <code>peerDependencies</code>
                and ensure that they are installed and their versions are compatible with constraints from Taiga
                libraries.
            </tui-expand>
        </tui-accordion>

        <tui-accordion>
            <button
                id="nx-legacy-peer-deps-bug"
                tuiAccordion
                tuiAccordionTarget
            >
                <div>
                    I ran
                    <code>nx migrate --run-migrations</code>
                    and got
                    <code>Cannot find module 'ts-morph'</code>
                    error.
                    <br />
                    <br />
                    But my project uses NPM
                    <strong>without</strong>
                    <code>legacy-peer-deps</code>
                    !
                </div>
            </button>
            <tui-expand>
                Command
                <code>ng migrate</code>
                has known
                <a
                    href="https://github.com/nrwl/nx/issues/26675"
                    target="_blank"
                    tuiLink
                >
                    issue
                </a>
                . Just run
                <code>npm install</code>
                again and run

                <tui-doc-code
                    code="npm_config_legacy_peer_deps=false nx migrate --run-migrations"
                    class="tui-space_top-2"
                />
            </tui-expand>
        </tui-accordion>

        <tui-accordion>
            <button
                id="manual-run-schematics"
                tuiAccordion
                tuiAccordionTarget
            >
                <div>
                    I still have some problems with running the basic version of
                    <code>ng\xA0update</code>
                    /
                    <code>ng\xA0migrate</code>
                    command. I need an approach to execute all schematics manually.
                </div>
            </button>
            <tui-expand>
                <ol class="tui-list tui-list_ordered">
                    <li class="tui-list__item">
                        Manually update all Taiga UI's packages to
                        <code>v4</code>
                        (i.e. just change versions inside your
                        <code>package.json</code>
                        by yourself without any console commands and then run
                        <code>npm install</code>
                        ).
                    </li>
                    <li class="tui-list__item">
                        Check that
                        <code>node_modules/&#64;taiga-ui/cdk/package.json</code>
                        contains the 4th major version
                    </li>
                    <li class="tui-list__item">
                        Execute:
                        <tui-doc-code code="ng update @taiga-ui/cdk --migrate-only --from=3 --to=4" />
                        or
                        <tui-doc-code [code]="manuallyTriggerNxMigration" />
                    </li>
                </ol>
            </tui-expand>
        </tui-accordion>
    </section>
</tui-doc-page>
`;export{i as default};
