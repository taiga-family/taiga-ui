import"./chunk-HU6DUUP4.js";var o=`<tui-doc-page header="Jest">
    <ng-template pageTab>
        <div>
            Jest runs in a Node.js environment, which means that global objects like window, document, and navigator
            which are present in a real web browser, are unavailable. This instructions ensures that Taiga UI components
            can run correctly in Jest.
            <p>
                Taiga UI is designed to be SSR-safe, and we use abstractions provided by
                <code>&#64;ng-web-apis/common</code>
                to avoid direct access to browser globals such as
                <a
                    href="https://github.com/taiga-family/ng-web-apis/blob/main/libs/common/src/tokens/window.ts#L4"
                    target="_blank"
                    tuiLink
                >
                    window
                </a>
                or
                <a
                    href="https://github.com/taiga-family/ng-web-apis/blob/main/libs/common/src/tokens/navigator.ts#L6"
                    target="_blank"
                    tuiLink
                >
                    navigator.
                </a>
            </p>
        </div>

        <tui-doc-example
            heading="Installation"
            [content]="install"
            [description]="installation"
            [fullsize]="true"
            [preview]="false"
        />
        <ng-template #installation>
            Most browser APIs do not exist under Node.js, so you need to have them mocked to prevent runtime errors such
            as
            <code>ReferenceError: IntersectionObserver is not defined</code>
            <p>
                To simplify this, we provide ready-to-use
                <a
                    href="https://github.com/taiga-family/toolkit/blob/main/projects/jest-config/polyfill.ts"
                    tuiLink
                >
                    mocks.
                </a>
            </p>
        </ng-template>

        <tui-doc-example
            description="By default, we provide a preconfigured setup that you only need to connect to your project."
            heading="Configuration"
            [content]="config"
            [fullsize]="true"
            [preview]="false"
        />

        <tui-doc-example
            heading="Manual setup"
            [content]="manual"
            [description]="desc"
            [fullsize]="true"
            [preview]="false"
        />
        <ng-template #desc>
            If your project already has Jest configured and uses a custom setup-jest.ts, you only need to include our
            <a
                href="https://github.com/taiga-family/toolkit/blob/main/projects/jest-config/polyfill.ts"
                tuiLink
            >
                mocks.
            </a>
        </ng-template>
    </ng-template>
</tui-doc-page>
`;export{o as default};
