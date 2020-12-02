interface LicensePolicy {
    isLicenseWrittenFor(licenseType: string | null): boolean;
    isLicenseUnacceptableFor(licenseType: string | null): boolean;
    handleUnacceptableLicense(packageName: string, licenseType: string | null): void;
    handleMissingLicenseText(packageName: string, licenseType: string | null): void;
}
export { LicensePolicy };
