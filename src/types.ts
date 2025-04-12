import {Country} from "country-list-with-dial-code-and-flag";

export interface UseCountryResult {
  country: Country | undefined;
  error: Error | undefined;
  loading: boolean;
  getCountryByIP: () => Promise<void>;
}

export interface UseCountryProps {
  fallback?: string; // ISO 3166-1 alpha-2 country code. e.g., "US".
}
