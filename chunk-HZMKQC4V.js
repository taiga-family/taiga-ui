import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page header="AI support">
    <section>
        <h2>
            <a
                href="https://github.com/taiga-family/taiga-ui-mcp"
                target="_blank"
                tuiLink
            >
                Taiga UI MCP Server
            </a>
        </h2>
        <p class="description">
            This MCP is the fastest way to integrate Taiga UI components into your AI workflow. The Model Context
            Protocol (MCP) server provides AI assistants with full access to Taiga UI components. Easily obtain Taiga UI
            component implementations for use in your AI-driven development process.
        </p>

        <h3>Key Features</h3>
        <ul tuiList>
            <li>
                <strong>Documentation + code snippets:</strong>
                Full Taiga UI documentation in Markdown format plus ready-made Angular examples \u2014 all in one place.
            </li>

            <li>
                <strong>Flexible configuration and ease:</strong>
                You can change the source URL (stable/next) without installing Angular locally.
            </li>
        </ul>

        <h3>Available Tools</h3>
        <ul tuiList>
            <li>
                <strong><code>get_overview</code></strong>
                \u2014 call this tool first to retrieve the fully structured documentation header as JSON. Includes
                installation instructions, critical notices, and subsections with their content and code blocks.
            </li>

            <li>
                <strong><code>get_list_components</code></strong>
                \u2014 list all Taiga UI documentation section IDs (with optional fuzzy substring filtering) along with basic
                metadata (category, package, type).
            </li>

            <li>
                <strong><code>get_component_example</code></strong>
                \u2014 return full documentation content and code snippets for specified section name(s).
            </li>
        </ul>

        <h3>Installation</h3>
        <tui-doc-code [code]="installation" />
    </section>

    <section>
        <h2>
            Providing Context with
            <code>llms.txt</code>
        </h2>
        <p class="description">
            <code>llms.txt</code>
            is a
            <a
                href="https://llmstxt.org"
                target="_blank"
                tuiLink
            >
                proposed standard
            </a>
            for websites designed to help LLMs better understand and process their content. The Taiga UI team has
            developed two versions of this file to help LLMs and tools that use LLMs for code generation to create
            better code:
        </p>
        <ul tuiList>
            <li>
                <a
                    href="/llms.txt"
                    target="_blank"
                    tuiLink
                >
                    llms.txt
                </a>
                - a table of contents file providing links to key files and resources.
            </li>

            <li>
                <a
                    href="/llms-full.txt"
                    target="_blank"
                    tuiLink
                >
                    llms-full.txt
                </a>
                - a more detailed compiled set of resources describing how to start development with Taiga UI and
                examples of using components.
            </li>
        </ul>
    </section>
</tui-doc-page>
`;export{o as default};
