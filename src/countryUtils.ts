import CountryList, {
  Country,
  FilterOption,
} from "country-list-with-dial-code-and-flag";

// Re-export types for external use.
export type {Country, FilterOption};

export const findOneByCountryCode = (code: string): Country | undefined => {
  return CountryList.findOneByCountryCode(code);
};

export const findOneByDialCode = (dialCode: string): Country | undefined => {
  return CountryList.findOneByDialCode(dialCode);
};

export const findByCountryCode = (
  code: string,
  option?: FilterOption,
): Array<Country> => {
  return CountryList.findByCountryCode(code, option);
};

export const findByDialCode = (dialCode: string): Array<Country> => {
  return CountryList.findByDialCode(dialCode);
};

export const findByKeyword = (
  keyword: string,
  option?: FilterOption,
): Array<Country> => {
  return CountryList.findByKeyword(keyword, option);
};

export const findByCurrencyCode = (
  code: string,
  option?: FilterOption,
): Array<Country> => {
  return CountryList.findByCurrencyCode(code, option);
};

export const findOneByCurrencyCode = (
  currencyCode: string,
): Country | undefined => {
  return CountryList.findOneByCurrencyCode(currencyCode);
};

export const getAllCountries = (option?: FilterOption): Array<Country> => {
  return CountryList.getAll(option);
};
