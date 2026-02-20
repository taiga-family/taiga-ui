import"./chunk-HU6DUUP4.js";var t=`<tui-doc-page
    header="Surface"
    package="LAYOUT"
    type="components"
>
    <ng-template pageTab>
        <p>
            General purpose container used in Taiga UI interfaces. Often used in conjunction with
            <a
                tuiLink
                [routerLink]="routes.CardMedium"
            >
                Card
            </a>
            component.
        </p>

        @for (example of examples; track example) {
            <tui-doc-example
                [component]="$index + 1 | tuiComponent"
                [content]="$index + 1 | tuiExample"
                [heading]="example"
            >
                @switch ($index + 1) {
                    @case (1) {
                        <div
                            tuiNotification
                            class="tui-space_bottom-4"
                        >
                            You can enable hover effects only on devices with pointer:
                            <div>
                                <code>&#64;media (hover: hover)</code>
                            </div>
                        </div>
                    }
                    @case (2) {
                        <div
                            tuiNotification
                            class="tui-space_bottom-4"
                        >
                            Note that
                            <code>padding</code>
                            and
                            <code>border-radius</code>
                            are not part of the surface. Take a look at
                            <a
                                tuiLink
                                [routerLink]="routes.CardLarge"
                                [textContent]="'Card'"
                            ></a>
                            component for that.
                        </div>
                    }
                    @case (3) {
                        <div
                            appearance="warning"
                            tuiNotification
                            class="tui-space_bottom-4"
                        >
                            Text should have vertical compensation to look properly aligned, either with unequal
                            <code>padding</code>
                            or with negative
                            <code>margin</code>
                            . Typical value is
                            <strong>0.25rem</strong>
                            , smaller line-height might require
                            <strong>0.125rem</strong>
                            instead.
                        </div>
                    }
                }
            </tui-doc-example>
        }
    </ng-template>

    <ng-template pageTab="Layers">
        <div>
            You can combine element itself,
            <code>::before</code>
            and
            <code>::after</code>
            pseudo-elements to create complex surfaces.
            <p>
                For more complex cases like you can use
                <code>tuiSurfaceLayer</code>
                directive to introduce more layers behind content. But that is mostly necessary for additional elements
                like
                <code>input type="radio"</code>
                or a
                <code>video</code>
                tag as seen in the examples on the main tab.
            </p>
            <hr />
            <p>
                <b>Styles to to be applied to the element:</b>
                <code>background</code>
                ,
                <code>border-radius</code>
                ,
                <code>box-shadow</code>
                ,
                <code>mask</code>
                ,
                <code>padding</code>
                ,
                <code>transform</code>
            </p>
            <p>
                <b>Styles to be applied to ::BEFORE pseudo-element:</b>
                <code>backdrop-filter</code>
            </p>
            <p>
                <b>Styles to be applied to ::AFTER pseudo-element:</b>
                Any overlays on top of
                <code>backdrop-filter</code>
                effect of ::BEFORE pseudo-element
            </p>
            <hr />
        </div>

        <tui-doc-example
            heading="Examples"
            [component]="7 | tuiComponent"
            [content]="7 | tuiExample: 'html,less' : layerExample"
        />
    </ng-template>
</tui-doc-page>
`;export{t as default};
