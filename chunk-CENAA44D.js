import"./chunk-HU6DUUP4.js";var o=`:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.image-1 {
    background: url('/assets/images/illustration.jpg') no-repeat top right / 250%;
}

.image-2 {
    background: url('/assets/images/road-illustration.jpg') no-repeat center / cover;
}

.image-2,
:host-context([tuiTheme='dark']) .image-1 {
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        inline-size: 100%;
        block-size: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
}
`;export{o as default};
