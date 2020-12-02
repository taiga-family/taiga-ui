import { NgWalkerConfig } from './ngWalker';
import { MetadataReader } from './metadataReader';
import { BasicCssAstVisitor } from './styles/basicCssAstVisitor';
import { RecursiveAngularExpressionVisitor } from './templates/recursiveAngularExpressionVisitor';
import { BasicTemplateAstVisitor } from './templates/basicTemplateAstVisitor';
export declare const ngWalkerFactoryUtils: {
    defaultConfig(): {
        templateVisitorCtrl: typeof BasicTemplateAstVisitor;
        expressionVisitorCtrl: typeof RecursiveAngularExpressionVisitor;
        cssVisitorCtrl: typeof BasicCssAstVisitor;
    };
    defaultMetadataReader(): MetadataReader;
    normalizeConfig(config: NgWalkerConfig): any;
};
