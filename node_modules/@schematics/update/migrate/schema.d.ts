export interface Schema {
    /**
     * The collection to load the migrations from.
     */
    collection: string;
    /**
     * The version installed previously.
     */
    from: string;
    /**
     * The package to migrate.
     */
    package: string;
    /**
     * The version to migrate to.
     */
    to: string;
}
