import {useState, useCallback, useEffect} from "react";
import CountryList, {Country} from "country-list-with-dial-code-and-flag";
import {UseCountryResult} from "./types";

const API_COUNTRY_IS = "https://api.country.is";

const useCountry = (): UseCountryResult => {
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCountryBasedOnLocation = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API_COUNTRY_IS);
      if (!res.ok) {
        setError(new Error(res.statusText));
      }

      const data = await res.json();
      setCountry(CountryList.findOneByCountryCode(data.country));
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountryBasedOnLocation();
  }, [fetchCountryBasedOnLocation]);

  return {country, error, loading, fetchCountryBasedOnLocation};
};

export default useCountry;
