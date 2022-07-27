/* eslint-disable @typescript-eslint/naming-convention */
export const enum TuiCreditCardAutofillName {
    Off = `off`,
    CcName = `cc-name`,
    CcNumber = `cc-number`,
    CcCsc = `cc-csc`,
    CcExpMonth = `cc-exp-month`,
    CcExpYear = `cc-exp-year`,
    CcExp = `cc-exp`,
    CcType = `cc-type`,
}

export const enum TuiNameAutofillName {
    Off = `off`,
    Name = `name`,
    GivenName = `given-name`,
    AdditionalName = `additional-name`,
    FamilyName = `family-name`,
}

export const enum TuiAccountAutofillName {
    Off = `off`,
    Username = `username`,
    NewPassword = `new-password`,
    CurrentPassword = `current-password`,
}

export const enum TuiEmailAutofillName {
    Off = `off`,
    Email = `email`,
}

export const enum TuiAddressAutofillName {
    Off = `off`,
    StreetAddress = `street-address`,
    PostalCode = `postal-code`,
    CountryName = `country-name`,
}

export const enum TuiPhoneAutofillName {
    Off = `off`,
    Tel = `tel`,
}

export const enum TuiDateAutofillName {
    Off = `off`,
    Bday = `bday`,
}

export const enum TuiTransactionAutofillName {
    Off = `off`,
    TransactionCurrency = `transaction-currency`,
    TransactionAmount = `transaction-amount`,
}

export type TuiAutofillFieldNameT =
    | 'off'
    // TuiCreditCardAutofillName
    | 'cc-name'
    | 'cc-number'
    | 'cc-csc'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-exp'
    | 'cc-type'
    // TuiNameAutofillName
    | 'name'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    // TuiAccountAutofillName
    | 'username'
    | 'new-password'
    | 'current-password'
    // TuiEmailAutofillName
    | 'email'
    // TuiAddressAutofillName
    | 'street-address'
    | 'postal-code'
    | 'country-name'
    // TuiPhoneAutofillName
    | 'tel'
    // TuiDateAutofillName
    | 'bday'
    // TuiTransactionAutofillName
    | 'transaction-currency'
    | 'transaction-amount';

export type TuiAutofillFieldName =
    | TuiAutofillFieldNameT
    | TuiCreditCardAutofillName
    | TuiNameAutofillName
    | TuiAccountAutofillName
    | TuiEmailAutofillName
    | TuiAddressAutofillName
    | TuiPhoneAutofillName
    | TuiDateAutofillName
    | TuiTransactionAutofillName;
