import"./chunk-HU6DUUP4.js";var l=`[tuiBadge] {
    font-size: 0.75rem;
    color: #6b7280;
    background: #fff;
    border: 1px solid #e5e7eb;
    padding: 0.25rem 0.625rem;
}

.meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-block-start: 0.5rem;
}

.table {
    inline-size: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

.col-toggle {
    inline-size: 2.25rem;
}

.col-min {
    inline-size: 3rem;
}

.col-total {
    inline-size: 5rem;
}

[tuiTd] {
    border-inline-start: none;
    border-inline-end: none;
}

tr.child td {
    border: none;
}

.show-browser {
    display: flex;
    align-items: center;
    gap: 0.375rem;
}

.toggle-cell {
    padding-inline: 0.25rem;
}

.min-cell,
.total-cell {
    text-align: end;
    white-space: nowrap;
}

.coverage-cell {
    position: relative;
    overflow: hidden;
    padding-inline: 0.5rem;
}

.coverage-cell::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: calc(var(--coverage, 0) * 1%);
    background: #ffd400;
}
`;export{l as default};
