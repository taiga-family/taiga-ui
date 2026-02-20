import"./chunk-HU6DUUP4.js";var a=`<button
    tuiButton
    type="button"
    (click)="open = true"
>
    Show
</button>
<ng-template
    let-observer
    [tuiSheetDialogOptions]="options"
    [(tuiSheetDialog)]="open"
>
    <span>
        <a
            appearance="secondary"
            href="mailto:alexander@inkin.ru"
            iconStart="@tui.mail"
            size="m"
            tuiIconButton
            class="tui-space_right-2"
        >
            Email
        </a>
        <a
            appearance="secondary"
            href="https://t.me/waterplea"
            iconStart="@tui.phone-forwarded"
            size="m"
            tuiIconButton
            class="tui-space_right-2"
        >
            Telegram
        </a>
        <a
            appearance="secondary"
            href="https://waterplea.bandcamp.com/"
            iconStart="@tui.music"
            size="m"
            tuiIconButton
        >
            Music
        </a>
    </span>
    <p [style.flex-grow]="1">Passionate Angular dev, musician and OSS author.</p>
    <footer tuiFloatingContainer>
        <button
            size="m"
            tuiButton
            type="button"
            (click)="observer.complete()"
        >
            Give a raise
        </button>
        <button
            appearance="secondary"
            size="m"
            tuiButton
            type="button"
            (click)="observer.complete()"
        >
            Fire
        </button>
    </footer>
</ng-template>
`;export{a as default};
