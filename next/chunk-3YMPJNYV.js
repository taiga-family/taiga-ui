import"./chunk-LQ6M4NCU.js";var t=`<tui-doc-page header="AI support">
    <ng-template pageTab>
        <p class="description">
            We treat AI agents as first-class readers of our documentation. The same Taiga UI knowledge is published in
            a few complementary shapes \u2014 a flat context file, a query server, and reusable skills \u2014 so whatever your
            assistant can consume, it reaches the current, version-correct API instead of guessing from memory.
        </p>
        <p class="description">
            That matters more than it sounds. An assistant can scaffold a screen in seconds, but it generates components
            from training data frozen in time \u2014 so the code often compiles yet quietly targets an API that has moved on,
            and a growing app drifts out of sync with itself. Point the agent at a live, versioned source and generated
            code stays aligned with the components you actually ship.
        </p>

        <tui-doc-example
            heading="Why it helps"
            [fullsize]="true"
            [preview]="false"
        >
            <ul tuiList>
                <li>
                    <strong>Current, not remembered</strong>
                    \u2014 the agent reads today's API from a live source instead of recalling a stale one from its training
                    cut-off.
                </li>
                <li>
                    <strong>Generated from source</strong>
                    \u2014 the same pipeline that builds these docs and their runnable examples, so what the agent reads is
                    what you ship.
                </li>
            </ul>
        </tui-doc-example>

        <tui-doc-example
            heading="Choose a layer"
            [fullsize]="true"
            [preview]="false"
        >
            <p class="description">
                These aren't competing options \u2014 they are a stack of roles over one body of knowledge.
            </p>
            <div class="t-cards">
                <a
                    appearance="secondary-grayscale"
                    routerLink="/ai/skills"
                    tuiCardLarge="compact"
                    tuiHeader="h6"
                >
                    <span tuiTitle>
                        Skills
                        <span tuiSubtitle>Follow a proven Taiga workflow and know what to double-check.</span>
                    </span>
                    <span tuiAccessories>
                        <div tuiAvatar="@tui.workflow"></div>
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
                        <span tuiSubtitle>Ask for one component's exact, current API on demand.</span>
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
                        <span tuiSubtitle>Drop the current API into any model's context window.</span>
                    </span>
                    <span tuiAccessories>
                        <div tuiAvatar="@tui.file-text"></div>
                    </span>
                </a>
            </div>
            <div
                appearance="neutral"
                tuiNotification
            >
                <code>llms-full.txt</code>
                is the generated data,
                <code>&#64;taiga-ui/mcp</code>
                is a query interface over that same data, and skills are the method that consumes it. When they
                disagree, the live source wins.
            </div>
        </tui-doc-example>
    </ng-template>
</tui-doc-page>
`;export{t as default};
