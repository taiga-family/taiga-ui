import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page header="About">
    <p>
        Taiga UI is a comprehensive Angular UI kit built and maintained by a dedicated team of passionate developers,
        including two Google Developer Experts.
    </p>
    <p>
        The library consists of several packages, such as CDK, Core, Kit and so on, building upon each other to provide
        a robust foundation for Angular applications.
    </p>
    <p>
        Visit our
        <a
            href="https://t.me/taiga_ui"
            iconStart="assets/icons/telegram.svg"
            rel="noreferrer"
            target="_blank"
            tuiLink
        >
            Telegram
        </a>
        or Taiga UI section on Angular
        <a
            href="https://discord.gg/zrB2EdJjEy"
            iconStart="assets/icons/discord.svg"
            rel="noreferrer"
            target="_blank"
            tuiLink
        >
            Discord
        </a>
        for assistance.
    </p>
    <p>
        All of its
        <em>dependencies</em>
        <tui-icon
            tuiHintAppearance="floating"
            [tuiTooltip]="deps"
        />
        <ng-template #deps>
            With a sole exception of Google's
            <a
                href="https://github.com/google/libphonenumber"
                tuiLink
            >
                libphonenumber
            </a>
            used as a source of truth for international phone number formats
        </ng-template>
        are managed under the same
        <a
            href="https://github.com/taiga-family"
            tuiLink
        >
            Taiga Family
        </a>
        GitHub organization. You can read more on each individual package below.
    </p>
    <div class="grid-container grid">
        <a
            href="http://bit.ly/3XBdHs4"
            rel="noreferrer"
            target="_blank"
            tuiAppearance="floating"
            class="preview"
        >
            <img
                alt="taiga-family logo"
                src="assets/images/taiga-family.png"
                class="img"
            />

            <div tuiCardLarge>
                <div>
                    Read more about
                    <b>Taiga UI Family</b>
                </div>
            </div>
        </a>

        <div class="grid">
            <a
                appearance="floating"
                href="https://github.com/taiga-family/ng-event-plugins"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
            >
                <h3 class="title">&#64;taiga-ui/event-plugins</h3>

                <div>
                    Angular event plugins library for optimizing change detection cycles for performance sensitive
                    events (such as
                    <code>touchmove</code>
                    ,
                    <code>scroll</code>
                    ,
                    <code>drag</code>
                    etc.) and declarative
                    <code>preventDefault()</code>
                    and
                    <code>stopPropagation()</code>
                    as well as capture phase listeners.
                    <strong>
                        Included with
                        <code>&#64;taiga-ui/cdk</code>
                    </strong>
                </div>
            </a>
            <a
                appearance="floating"
                href="https://taiga-family.github.io/ng-morph/"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
            >
                <img
                    alt="ng-morph logo"
                    src="https://raw.githubusercontent.com/taiga-family/ng-morph/main/apps/demo/src/assets/images/ng-morph.png"
                    class="img img-min"
                />
                <h3 class="title title_size_s">ng-morph</h3>
                <div>Code mutations in your project or schematics were never easier than now.</div>
            </a>
        </div>

        <div class="grid">
            <a
                appearance="floating"
                href="https://maskito.dev"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
            >
                <img
                    alt="maskito logo"
                    src="https://raw.githubusercontent.com/taiga-family/maskito/main/projects/demo/src/assets/icons/maskito.svg"
                    class="img img-min"
                />
                <h3 class="title title_size_s">Maskito</h3>
                <div>
                    Collection of libraries to create an input mask which ensures that user types value according to
                    predefined format. Core concepts of the libraries are simple but they provide flexible API to set
                    any format you wish: numbers, phone, date, credit card number etc.
                </div>
            </a>
            <a
                appearance="floating"
                href="https://github.com/taiga-family/ng-dompurify"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
            >
                <h3 class="title">&#64;taiga-ui/dompurify</h3>

                <div>
                    This library implements DOMPurify as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify
                    and supports the same configuration.
                </div>
            </a>
        </div>

        <a
            appearance="floating"
            href="https://github.com/taiga-family/ng-polymorpheus"
            rel="noreferrer"
            target="_blank"
            tuiCardLarge
        >
            <img
                alt="ng-polymorpheus logo"
                src="https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/master/projects/demo/assets/logo.svg"
                class="img"
            />
            <h3 class="title title_size_s">&#64;taiga-ui/polymorpheus</h3>
            <div>
                A tiny library that abstracts over different ways of view customization in Angular with one simple
                structural directive.
                <strong>
                    Included with
                    <code>&#64;taiga-ui/cdk</code>
                </strong>
            </div>
        </a>

        <a
            appearance="floating"
            href="https://taiga-family.github.io/ng-draw-flow"
            rel="noreferrer"
            target="_blank"
            tuiCardLarge
        >
            <img
                alt="ng-draw-flow logo"
                src="https://raw.githubusercontent.com/taiga-family/ng-draw-flow/main/projects/demo/src/assets/icons/logo.svg"
                class="img img-min"
            />

            <h3 class="title">NgDrawFlow</h3>

            <div>
                A customizable Angular component for building node-based editors and interactive diagrams with intuitive
                drag-and-drop functionality and seamless connection management.
            </div>
        </a>

        <a
            appearance="floating"
            href="https://taiga-family.github.io/ng-web-apis"
            rel="noreferrer"
            target="_blank"
            tuiCardLarge
        >
            <img
                alt="web apis logo"
                src="https://taiga-family.github.io/ng-web-apis/assets/images/web-api.svg"
                class="img img-min"
            />
            <h3 class="title title_size_s">Web APIs for Angular</h3>
            <div>
                High quality lightweight wrappers for native Web APIs for idiomatic use with Angular.
                <strong>
                    <code>&#64;ng-web-apis/common</code>
                    ,
                    <code>&#64;ng-web-apis/mutation-observer</code>
                    and
                    <code>&#64;ng-web-apis/resize-observer</code>
                    are included with
                    <code>&#64;taiga-ui/cdk</code>
                </strong>
            </div>
        </a>

        <div class="grid">
            <a
                appearance="floating"
                href="https://taiga-family.github.io/editor"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
            >
                <img
                    alt="Editor logo"
                    src="https://raw.githubusercontent.com/taiga-family/editor/main/projects/demo/src/assets/icons/logo.svg"
                    class="img"
                />
                <h3 class="title title_size_s">&#64;taiga-ui/editor</h3>
                <div>TUI Editor is a rich text editor extension with related Taiga UI components.</div>
            </a>

            <a
                appearance="floating"
                rel="noreferrer"
                target="_blank"
                tuiCardLarge
                [href]="screenshotBotLink"
            >
                <h3 class="title">Github App {{ screenshotBotName }}</h3>

                <div>GitHub App to help with screenshot tests by attaching them as comments to PRs</div>
            </a>
        </div>
    </div>
</tui-doc-page>
`;export{t as default};
