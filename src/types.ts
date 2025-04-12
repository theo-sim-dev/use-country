import {Country} from "country-list-with-dial-code-and-flag";

export interface UseCountryResult {
  country: Country | undefined;
  error: Error | undefined;
  loading: boolean;
  getCountryByIP: () => Promise<void>;
}
