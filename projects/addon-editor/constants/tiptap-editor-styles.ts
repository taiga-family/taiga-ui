export const tiptapEditorStyles = `
@import 'https://fonts.googleapis.com/css2?family=Manrope:wght@500;800&display=swap';

.tui-editor-socket h1,
.tui-editor-socket h2,
.tui-editor-socket h3,
.tui-editor-socket h4,
.tui-editor-socket h5,
.tui-editor-socket h6 {
    word-break: break-word;
    line-height: normal;
}

.tui-editor-socket {
    margin: 0;
    overflow: hidden;
    white-space: pre-wrap;
}

.tui-editor-socket p:empty:after {
    content: ' ';
    white-space: pre;
}

.tui-editor-socket p:first-child {
    margin-top: 0
}

.tui-editor-socket {
    display: block;
    color: var(--tui-text-01);
    font: var(--tui-font-text-m);
}

.tui-editor-socket ul,
.tui-editor-socket ol {
    list-style-type: none;
    margin: 16px 16px 16px 24px;
    padding: 0;
}

.tui-editor-socket li {
    margin: 16px 0;
}


.tui-editor-socket li p {
    display: inline;
    margin: 0 auto;
    word-break: break-word;
}

.tui-editor-socket ul li p {
    display: inline-block;
}

.tui-editor-socket ul > li:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin: 8px 14px 1px -22px;
    background-color: var(--tui-primary);
    vertical-align: top;
    box-sizing: border-box;
}

.tui-editor-socket li ul > li:before {
    background: none;
    border: 2px solid var(--tui-primary);
}

.tui-editor-socket li ul > li > ul > li:before {
    background: var(--tui-primary);
    border-radius: 0;
    width: 6px;
    height: 6px;
}

.tui-editor-socket ol {
    counter-reset: item;
}

.tui-editor-socket ol > li:before {
    content: counters(item, '.') '.';
    width: 24px;
    margin: 0 12px 0 -24px;
    counter-increment: item;
    color: var(--tui-base-05);
    vertical-align: top;
}

.tui-editor-socket pre {
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 4px;
    margin: 16px 0;
    padding: 12px 16px;
    font-family: 'Courier', monospace;
    color: var(--tui-text-02);
    background: var(--tui-base-02);
}

.tui-editor-socket pre code {
    box-shadow: none;
}

.tui-editor-socket pre + pre {
    margin-top: -29px;
    padding-top: 0;
}

.tui-editor-socket blockquote {
    margin: 20px 0 20px 24px;
    padding-left: 17px;
    border-left: 1px solid var(--tui-base-04);
}

.tui-editor-socket p {
    margin: 16px 0;
}

.tui-editor-socket a:not([data-type='jump-anchor']) {
    color: var(--tui-link);
    text-decoration: none;
    outline: none;
}

.tui-editor-socket a:not([data-type='jump-anchor']):hover {
    color: var(--tui-link-hover);
    text-decoration: underline;
}

.tui-editor-socket a:not([data-type='jump-anchor']):active {
    color: var(--tui-primary-active);
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor'] {
    text-decoration: underline;
    text-decoration-color: var(--tui-link);
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor']:before {
    content: '#';
}

.tui-editor-socket .ProseMirror a[data-type='jump-anchor']:hover {
    color: var(--tui-link);
}

.tui-editor-socket hr {
    border: none;
    border-top: 1px solid var(--tui-base-03);
    margin: 16px 0;
}

.tui-editor-socket table {
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
    margin: 0;
    overflow: hidden;
}

.tui-editor-socket table td {
    min-width: 1em;
    height: 2rem;
    border: 2px solid var(--tui-base-03);
    padding: 3px 5px;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    word-break: break-word;
}

.tui-editor-socket table th {
    min-width: 1em;
    height: 2rem;
    border: 2px solid var(--tui-base-03);
    padding: 3px 5px;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    word-break: break-word;
}

.tui-editor-socket table .column-resize-handle {
    position: absolute;
    right: -2px;
    top: 0;
    bottom: -2px;
    width: 4px;
    background-color: #adf;
    pointer-events: none;
}

.tui-editor-socket table td > * {
    margin-top: 0px;
    margin-bottom: 0px;
}

.tui-editor-socket table th > * {
    margin-top: 0px;
    margin-bottom: 0px;
}

.tui-editor-socket table  th {
    font-weight: bold;
    text-align: left;
    background-color: var(--tui-base-02);
    min-heigth: 2rem
}

.tui-editor-socket .resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
}

.tui-editor-socket table .tableWrapper {
    overflow-x: auto;
}

.tui-editor-socket .selectedCell:after {
    position: absolute;
    content: "";
    left: 0; right: 0; top: 0; bottom: 0;
    background: var(--tui-selection);
    pointer-events: none;
}

.tui-editor-socket font[face='Courier New'] {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #ecf1f7;
    display: inline-block;
    word-break: break-word;
}

.tui-editor-socket details {
  width: 100%;
  border: 1px solid var(--tui-base-04);
  border-radius: var(--tui-radius-l);
}

.tui-editor-socket summary {
   display: flex;
   align-items: center;
   min-height: 3.5rem;
   width: 100%;
   padding: 0 1.25rem;
   box-sizing: border-box;
   border-radius: var(--tui-radius-l);
   pointer-events: none;
}

.tui-editor-socket summary p {
  min-width: 1px;
  margin: 0;
}

.tui-editor-socket summary::-webkit-details-marker {
  display: none;
}

.tui-editor-socket details[open] summary {
   border-radius: var(--tui-radius-l) var(--tui-radius-l) 0 0;
}

.tui-editor-socket div[data-type='details-content'] {
  padding: 1.25rem;
  min-height: 3rem;
  border: 1px solid var(--tui-base-04);
  border-width: 1px 0 0 0;
}

.tui-editor-socket .details-wrapper {
  display: flex;
  position: relative;
}

.tui-editor-socket .details-arrow {
  position: absolute;
  top: 1.5rem;
  right: 1.25rem;
  height: 0.575rem;
  width: 0.575rem;
  border: 1px solid var(--tui-base-06);
  border-width: 0px 2px 2px 0;
  transform: rotate(45deg);
  transition: var(--tui-duration, 0.3s);
  appearance: none;
  box-sizing: border-box;
  padding: 0;
  background: none;
  cursor: pointer;
}

.tui-editor-socket .details-wrapper_rendered .details-arrow {
  pointer-events: none;
}

.tui-editor-socket .details-wrapper_rendered summary {
  transition: transform var(--tui-duration, 0.3s);
  cursor: pointer;
  pointer-events: auto;
}

.tui-editor-socket .details-wrapper_rendered summary:hover {
  background: var(--tui-base-02);
}

.tui-editor-socket details[open] + .details-arrow {
   transform: rotate(225deg);
   top: 1.75rem;
}

.t-editor-placeholder::before {
  content: attr(data-placeholder);
  float: left;
  color: var(--tui-base-05);
  pointer-events: none;
  height: 0;
}

.tui-group-node {
  display: flex;
  flex-direction: row;
}

.tui-group-node:hover > .tui-group-pointer {
  pointer-events: auto;
  opacity: 1;
}

.tui-group-pointer {
  opacity: 0;
  min-height: 0.8125rem;
  max-height: 0.8125rem;
  min-width: 0.8125rem;
  max-width: 0.8125rem;
  margin: 0.3125rem 0.3125rem 0 0;
  cursor: grab;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill-opacity="0.2" fill="black" /></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

[data-mode=onDark] .tui-group-pointer {
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill-opacity="0.2" fill="white" /></svg>');
}
`;
