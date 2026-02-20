import"./chunk-HU6DUUP4.js";var n=`<iframe
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d318007.389194818!2d-0.1506732382812497!3d51.48692612252592!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1738141112584!5m2!1sen!2sae"
    title="map"
    class="map"
></iframe>
<div
    #buttons
    class="buttons"
>
    <a
        appearance="floating"
        href="https://maps.google.com/maps?ll=25.085609,55.261751"
        iconStart="@tui.map-pin"
        rel="noopener noreferrer"
        size="m"
        target="_blank"
        tuiIconButton
    >
        Map
    </a>
    <a
        appearance="floating"
        href="https://london.gov.uk"
        iconStart="@tui.external-link"
        rel="noopener noreferrer"
        size="m"
        target="_blank"
        tuiIconButton
    >
        Website
    </a>
</div>
<tui-bottom-sheet
    class="sheet"
    [stops]="stops"
    (scroll.zoneless)="onScroll($any($event.target))"
>
    <h3 tuiHeader>
        <span tuiTitle>
            London
            <span tuiSubtitle>United Kingdom</span>
        </span>
    </h3>
    <div class="content">
        <div tuiTitle>
            <strong>Population</strong>
            <span tuiSubtitle>8,866,180</span>
        </div>
        <div tuiTitle>
            <strong>Area</strong>
            <span tuiSubtitle>1,572 square km</span>
        </div>
        <div tuiTitle>
            <strong>Time zone</strong>
            <span tuiSubtitle>UTC+00:00 (Greenwich Mean Time)</span>
        </div>
        <div tuiTitle>
            <strong>Established</strong>
            <span tuiSubtitle>47 AD</span>
        </div>
    </div>
    London is the capital and largest city of both England and the United Kingdom, with a population of 8,866,180 in
    2022. Its wider metropolitan area is the largest in Western Europe, with a population of 14.9 million. London stands
    on the River Thames in southeast England, at the head of a 50-mile (80 km) tidal estuary down to the North Sea, and
    has been a major settlement for nearly 2,000 years. Its ancient core and financial centre, the City of London, was
    founded by the Romans and has retained its medieval boundaries. The City of Westminster, to the west of the City of
    London, has been the centuries-long host of the national government and parliament. London grew rapidly in the 19th
    century, becoming the world's largest city at the time. Since the 19th century, the name "London" has referred to
    the metropolis around the City of London.
</tui-bottom-sheet>
`;export{n as default};
