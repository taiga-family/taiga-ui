import"./chunk-LQ6M4NCU.js";var t=`<tui-doc-page header="Skills">
    <ng-template pageTab>
        <p class="description">
            A skill teaches an AI assistant a durable
            <em>method</em>
            for working with Taiga UI \u2014 the workflow to follow and the checks to run \u2014 that it triggers automatically
            based on what you ask, no special command needed. Ours live in
            <a
                href="https://github.com/taiga-family/skills"
                target="_blank"
                tuiLink
            >
                taiga-family/skills
            </a>
            . A skill guides the assistant; it does not replace your review \u2014 the agent still verifies exact,
            version-specific APIs against a live source, and you approve the changes it proposes.
        </p>

        <tui-doc-example
            heading="Example prompts"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">Ask in plain language \u2014 the relevant skill triggers on context:</p>
            <ul tuiList>
                <li>"Migrate this project from Taiga UI v4 to v5 and fix the leftover migration TODOs."</li>
                <li>"Update Taiga UI to the latest major and clear the deprecation warnings."</li>
                <li>
                    "Resolve the
                    <code>&#64;taiga-ui/legacy</code>
                    imports left after
                    <code>ng update</code>
                    ."
                </li>
            </ul>
        </tui-doc-example>

        <tui-doc-example
            heading="Available skills"
            [fullsize]="true"
            [preview]="false"
        >
            <ul tuiList>
                <li>
                    <strong><code>tui-migration</code></strong>
                    \u2014 safely resolve the schematics migration TODOs left after
                    <code>ng update</code>
                    /
                    <code>nx migrate</code>
                    , clean up migration notes, and clear deprecation warnings without changing runtime behavior.
                </li>
            </ul>

            <div
                appearance="info"
                tuiNotification
                class="tui-space_top-4"
            >
                <strong>
                    <code>tui-developer</code>
                    is on the way
                </strong>
                \u2014 a skill for building apps with Taiga UI (setup, components, forms, dialogs, theming) is currently in
                the works and not part of the install yet.
            </div>
        </tui-doc-example>

        <tui-doc-example
            heading="Install"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">
                Skills install with
                <a
                    href="https://github.com/vercel-labs/skills"
                    target="_blank"
                    tuiLink
                >
                    <code>npx skills</code>
                </a>
                \u2014 no setup required. Install a specific skill:
            </p>
            <tui-doc-code [code]="skill" />

            <p class="description tui-space_top-4">\u2026or install everything at once:</p>
            <tui-doc-code [code]="all" />
        </tui-doc-example>

        <tui-doc-example
            heading="How it works"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">
                Each skill is a Markdown
                <code>SKILL.md</code>
                file with a short description of when to use it. Installing drops it into your agent's skills directory,
                and from then on the agent loads it automatically whenever your request matches that description \u2014 there
                is no flag or slash command to remember.
            </p>
            <p class="description tui-space_top-4">
                A skill carries the durable part \u2014 the workflow, the guardrails, the mistakes to avoid \u2014 and
                deliberately leaves exact component names, imports, and per-version APIs to an always-fresh source, the
                <a
                    routerLink="/ai/mcp"
                    tuiLink
                >
                    MCP server
                </a>
                or
                <a
                    routerLink="/ai/llms"
                    tuiLink
                >
                    <code>llms-full.txt</code>
                </a>
                , because Taiga UI evolves quickly. That keeps the method stable while the facts stay current.
            </p>
        </tui-doc-example>

        <tui-doc-example
            heading="Learn more"
            [fullsize]="true"
            [preview]="false"
        >
            <div class="t-cards">
                <a
                    appearance="secondary-grayscale"
                    href="https://github.com/taiga-family/skills"
                    target="_blank"
                    tuiCardLarge="compact"
                    tuiHeader="h6"
                >
                    <span tuiTitle>
                        taiga-family/skills
                        <span tuiSubtitle>Source and the full skill definitions.</span>
                    </span>
                    <span tuiAccessories>
                        <div tuiAvatar="@tui.github"></div>
                    </span>
                </a>

                <a
                    appearance="secondary-grayscale"
                    routerLink="/ai/mcp"
                    tuiCardLarge="compact"
                    tuiHeader="h6"
                >
                    <span tuiTitle>
                        MCP server
                        <span tuiSubtitle>Live, on-demand Taiga UI docs and examples.</span>
                    </span>
                    <span tuiAccessories>
                        <div tuiAvatar="@tui.server"></div>
                    </span>
                </a>

                <a
                    appearance="secondary-grayscale"
                    routerLink="/ai/llms"
                    tuiCardLarge="compact"
                    tuiHeader="h6"
                >
                    <span tuiTitle>
                        llms.txt
                        <span tuiSubtitle>Always-fresh context files to paste or point tools at.</span>
                    </span>
                    <span tuiAccessories>
                        <div tuiAvatar="@tui.file-text"></div>
                    </span>
                </a>
            </div>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{t as default};
