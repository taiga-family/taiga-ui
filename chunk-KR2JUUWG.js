import"./chunk-HU6DUUP4.js";var a=`<tui-doc-page header="Server Side Rendering (SSR)">
    <h2 tuiHeader="h6">
        <div tuiTitle>Tokens</div>
    </h2>
    <p>
        Taiga UI does not access global variables like
        <code>window</code>
        or
        <code>navigator</code>
        directly. Instead, we rely on DI tokens for simplicity of testing and cross-environment support.
    </p>
    <p>
        A separate library called
        <code>&#64;ng-web-apis/common</code>
        is dedicated solely to this purpose. It is a direct dependency and is installed with Taiga UI, you can find docs
        <a
            href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/common/README.md"
            rel="noreferrer noopener"
            target="_blank"
            tuiLink
        >
            here
        </a>
    </p>
    <h2 tuiHeader="h6">
        <div tuiTitle>Fallback</div>
    </h2>
    <p>
        For Server Side Rendering (SSR), a sister library
        <code>&#64;ng-web-apis/universal</code>
        can be used. It has advanced mocks and tools to extract user agent and location info from server side requests.
        If you want to use SSR with Taiga UI you need to install this package and follow instructions from
        <a
            href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/universal/README.md"
            rel="noreferrer noopener"
            target="_blank"
            tuiLink
        >
            README
        </a>
        . Note that this is also applicable to Jest which is a server side testing suite.
    </p>
</tui-doc-page>
`;export{a as default};
