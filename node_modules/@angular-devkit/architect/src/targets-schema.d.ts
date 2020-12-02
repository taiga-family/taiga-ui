/**
 * Target options.
 */
export interface Schema {
    /**
     * The builder used for this package.
     */
    builder: string;
    /**
     * A map of alternative target options.
     */
    configurations?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    options: {
        [key: string]: any;
    };
}
