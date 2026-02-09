// Configuration utilities
export * from './config';

// Path configuration utilities
export {getFoldersToScan, getPagesPath, setFoldersToScan, setPagesPath} from './paths';

// Route-based component extraction
export {
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
