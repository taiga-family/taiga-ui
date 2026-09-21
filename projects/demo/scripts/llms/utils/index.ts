// Configuration utilities
export * from './config';

// Path configuration utilities
export {getFoldersToScan, getPagesPath, setFoldersToScan, setPagesPath} from './paths';

// Route-based component extraction
export {
    buildFolderRouteMap,
    type ComponentInfo,
    extractComponentsFromRoutes,
    shouldIncludeComponent,
} from './routes';

// File system operations - exclude fileExists to avoid conflict
export {
    extractExampleDescriptions,
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentSourceFiles,
    getImportExamples,
    getMarkdownFiles,
    getUsageExamples,
    processMarkdownFile,
    readIndexHtml,
} from './file-system';

// Prose-page markdown rendering
export {
    getComponentProse,
    getFirstTabProse,
    getInlineCodeSnippets,
    getPageProse,
    htmlToMarkdown,
} from './page-prose';

// Colors/Typography token-table rendering
export {getDesignTokenTables} from './design-token-pages';
