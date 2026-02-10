import"./chunk-B4AJQJMI.js";var t=`<tui-doc-page
    header="Icon"
    package="CORE"
    type="components"
>
    <ng-template pageTab>
        <p>
            A component to show icons and color them with CSS. Taiga UI ships with
            <a
                href="https://lucide.dev/icons/"
                target="_blank"
                tuiLink
            >
                Lucide icons
            </a>
            . Same mechanism is used in all
            <code>iconStart</code>
            /
            <code>iconEnd</code>
            inputs across the library.
        </p>

        @for (example of examples; track $index) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [description]="description"
                [heading]="example"
            >
                <ng-template #description>
                    @switch ($index) {
                        @case (0) {
                            Using
                            <code>&commat;tui.</code>
                            ,
                            <code>&commat;img.</code>
                            and
                            <code>&commat;font.</code>
                            prefixes to set icon resolution mode. Control font using
                            <code>--tui-font-icon</code>
                            variable.
                        }
                        @case (1) {
                            By default icons follow font-size in both icon size and container size. You can set custom
                            container size by explicit
                            <code>inline-size</code>
                            /
                            <code>block-size</code>
                            . Built-in Lucide icons also support setting thickness via
                            <code>--tui-stroke-width</code>
                            variable.
                        }
                        @case (2) {
                            Combining icons for 2 colors or badge-like effect and using pipe to resolve icon URL by
                            name.
                        }
                        @case (3) {
                            By default icons are loaded as assets when they first appear in the DOM and then cached
                            according to your server policy, just like any image. You can also provide a dictionary of
                            icons to be included in the bundle instead using
                            <code>tuiIconsProvider</code>
                            .
                        }
                        @case (4) {
                            You can use
                            <code>tuiAssetsPathProvider</code>
                            helper to set a custom path for icon assets or use
                            <code>tuiIconResolverProvider</code>
                            to completely override name to path resolution logic. Keep in mind "/" symbol is not allowed
                            in icon's name because then it is treated as URL.
                        }
                        @case (5) {
                            You can pass external icons as URLs or base64 encoded strings. Set
                            <code>--tui-stroke-width</code>
                            to 0px if you are seeing skewed proportions, for example if your SVGs do not have
                            <code>viewBox</code>
                            or you are using PNGs.
                        }
                    }
                </ng-template>
            </tui-doc-example>
        }
    </ng-template>
    <ng-template pageTab>
        <tui-doc-demo>
            <tui-icon
                [background]="background"
                [badge]="badge"
                [icon]="icon"
                [style.background]="background ? 'var(--tui-status-info-pale-hover)' : ''"
            />
        </tui-doc-demo>

        <table tuiDocAPI>
            <tr
                name="[icon]"
                tuiDocAPIItem
                type="string"
                [items]="iconVariants"
                [(value)]="icon"
            >
                Icon name
            </tr>
            <tr
                name="[background]"
                tuiDocAPIItem
                type="string"
                [items]="backgroundVariants"
                [(value)]="background"
            >
                Icon used as a mask to produce 2-color icons
            </tr>
            <tr
                name="[badge]"
                tuiDocAPIItem
                type="string"
                [items]="backgroundVariants"
                [(value)]="badge"
            >
                Second icon used as a smaller badge in bottom right corner
            </tr>
        </table>
    </ng-template>
</tui-doc-page>
`;export{t as default};
