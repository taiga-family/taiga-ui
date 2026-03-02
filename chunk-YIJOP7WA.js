import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="KeyboardService"
    package="ADDON-MOBILE"
    path="addon-mobile/services/keyboard.service.ts"
    type="components/services"
>
    <ng-template pageTab>
        <p>
            A service that allows hiding and showing virtual keyboard programmatically on both Android and iOS devices
        </p>
        <div tuiNotification>Does nothing on devices with no virtual keyboard or when input is not focused</div>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
        />
    </ng-template>
    <ng-template pageTab="Setup">
        <ol class="tui-list tui-list_ordered">
            <li class="tui-list__item">
                Inject service and call its methods:

                <tui-doc-code
                    filename="my.component.ts"
                    [code]="inject"
                />
            </li>
        </ol>
    </ng-template>
</tui-doc-page>
`;export{i as default};
