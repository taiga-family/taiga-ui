import"./chunk-42JZD6NG.js";var n=`:host {
    ::ng-deep {
        tui-input-card-group {
            inline-size: 100% !important;

            &.without-date {
                .t-wrapper_expire {
                    display: none;
                }

                tui-icon[icon='@tui.x'] {
                    display: none;
                }
            }

            .t-value_collapsed {
                letter-spacing: 0.1px;
            }
        }
    }
}

.modal-container {
    inline-size: 30rem;
}

@media screen and (max-width: 599px) {
    .modal-container {
        inline-size: 100%;
    }
}

.title {
    margin: 0 0 1rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: 0.01125rem;
}

.form-block {
    position: relative;
    margin-block-end: 1rem;

    .saved-card-preset {
        &__item {
            display: flex;
            block-size: 3.5rem;
            background: #fafbfb;
            border-radius: 1rem;
            border: 2px solid #eaeaea;
            padding: 0 1rem;
            align-items: center;
            cursor: pointer;

            &__placeholder {
                color: #717172;
                letter-spacing: 0.015rem;
                font-size: 0.75rem;
                line-height: 1.125rem;
            }

            &__info {
                display: flex;
                align-items: center;

                &__icon {
                    inline-size: 2.25rem;
                    block-size: 1.375rem;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-inline-end: 0.5rem;
                }

                &__number {
                    letter-spacing: 0.2px;
                    line-height: 1.375rem;
                    color: #313132;
                }
            }
        }
    }

    &.is--links {
        display: flex;
        align-items: center;

        ::ng-deep {
            a {
                font-weight: normal;
                font-size: 0.875rem;
                line-height: 1.25rem;

                &:first-child {
                    color: #6496dc;
                }

                &:last-child {
                    color: #b0b0b0;
                    margin-inline-start: auto;
                }
            }
        }
    }
}

.fake-input {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -9999999;
    inline-size: 100%;
    caret-color: transparent;
    cursor: none;
    color: transparent;
}
`;export{n as default};
