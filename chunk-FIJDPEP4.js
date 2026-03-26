import"./chunk-HU6DUUP4.js";var i=`<tui-carousel [style.inline-size.rem]="12">
    <section
        *tuiItem="let index"
        appearance="neutral"
        tuiCardMedium
    >
        @let current = items.at(index % items.length);
        <span [tuiAvatar]="current?.icon"></span>
        <footer tuiTitle>
            {{ current?.title }}
            <span tuiSubtitle>{{ current?.subtitle }}</span>
        </footer>
    </section>
</tui-carousel>
`;export{i as default};
