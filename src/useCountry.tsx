import {useState, useCallback, useEffect} from "react";
import CountryList, {Country} from "country-list-with-dial-code-and-flag";
import {UseCountryResult, UseCountryProps} from "./types";

const API_COUNTRY_IS = "https://api.country.is";

const useCountry = ({fallback}: UseCountryProps = {}): UseCountryResult => {
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(true);

  const getCountryByIP = useCallback(async () => {
    setLoading(true);
    setError(undefined); // Reset error state before making the request.

    const fallbackCountry: Country | undefined = fallback
      ? CountryList.findOneByCountryCode(fallback)
      : undefined;

    if (fallback && !fallbackCountry) {
      console.error(
        `The provided fallback country code "${fallback}" is invalid. Falling back to a specified country will not be possible in case of a failure.`,
      );
    }

    try {
      const res = await fetch(API_COUNTRY_IS);
      if (!res.ok) {
        setError(new Error(res.statusText));
      }

      const data = await res.json(); // data.country represents a country code.
      const detectedCountry = CountryList.findOneByCountryCode(data.country);
      if (detectedCountry) {
        setCountry(detectedCountry);
      } else {
        // This won't likely happen.
        console.error(
          `Received an unrecognized country code "${data.country}" from the Country.is API. Falling back to the specified fallback country, if provided.`,
        );
        setCountry(fallbackCountry);
      }
    } catch (err) {
      console.error(
        `Error fetching country data: [${err}].\nFalling back to the specified fallback country, if provided.`,
      );
      setCountry(fallbackCountry);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [fallback]);

  useEffect(() => {
    getCountryByIP();
  }, [getCountryByIP]);

  return {country, error, loading, getCountryByIP};
};

export default useCountry;
