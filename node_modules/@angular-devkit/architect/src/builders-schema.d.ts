export interface Schema {
    /**
     * Link to schema.
     */
    $schema?: string;
    builders: {
        [key: string]: Builder;
    };
}
/**
 * Target options for Builders.
 */
export interface Builder {
    /**
     * The builder class module.
     */
    class?: string;
    /**
     * Builder description.
     */
    description: string;
    /**
     * The next generation builder module.
     */
    implementation?: string;
    /**
     * Schema for builder option validation.
     */
    schema: string;
}
