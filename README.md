# useCountry

[![npm](https://img.shields.io/npm/v/use-country?color=orange)](https://www.npmjs.com/package/use-country)
[![license](https://img.shields.io/badge/license-MIT-green)](https://www.npmjs.com/package/use-country)
[![typescript](https://img.shields.io/badge/typescript-blue?logo=typescript&logoColor=f5f5f5)](https://www.npmjs.com/package/use-country)
[![react](https://img.shields.io/badge/react-blue?logo=react)](https://www.npmjs.com/package/use-country)

📍**Detect your visitor's country!**

`useCountry` is a lightweight React hook that determines a country using the IP address via [Country.is](https://country.is/) API.

Country.is is completely free for both personal and commercial use, and so is `useCountry`.

## Demo

[![Edit mui-alert-provider demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/use-country-demo-52pvzy)

## Features

[Country.is](https://country.is/) is a free IP-to-country geolocation API that returns a visitor's country based on their IP address. It has been reliably operating for over a decade. For more information about usage limits and capabilities, please visit the website.

This package relies on `country-list-with-dial-code-and-flag`, which is another cool library containing lots of useful methods to deal with countries. Please visit their [npm](https://www.npmjs.com/package/country-list-with-dial-code-and-flag) for more information.

## Installation

```bash
npm install use-country country-list-with-dial-code-and-flag
```

or

```bash
yarn add use-country country-list-with-dial-code-and-flag
```

## Usage

[Check out this playground](https://codesandbox.io/p/sandbox/use-country-demo-52pvzy) 🎮

Simply import `useCountry` into your React component. The hook provides the detected country, loading state, error (if any), and a method to manually fetch the country again.

```tsx
import React from "react";
import { useCountry } from "use-country";

const App = () => {
  const { country, loading, error, getCountryByIP } = useCountry({ fallback: "US" });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Detected Country</h1>
      {country ? (
        <div>
          <p>Country Name: {country.name}</p>
          <p>Country Code: {country.code}</p>
          <p>Dial Code: {country.dial_code}</p>
          <img src={country.flag} alt={`${country.name} flag`} width="50" />
        </div>
      ) : (
        <p>No country detected.</p>
      )}
      <button onClick={getCountryByIP}>Retry</button>
    </div>
  );
};

export default App;
```

## API

### `useCountry` hook

#### Receives `UseCountryProps`

| Properties | Type                  | Description                                                                 |
|------------|-----------------------|-----------------------------------------------------------------------------|
| `fallback` | `string \| undefined` | An optional ISO country code to use as a fallback if the API call fails. e.g., "FR" |

#### Returns `UseCountryResult`

| Properties         | Type                          | Description                                                                 |
|--------------------|-------------------------------|-----------------------------------------------------------------------------|
| `country`          | `Country \| undefined`        | A detected `Country` object. `undefined` if no country is detected.     	|
| `error`            | `Error \| undefined`          | An error object if an error occurs during the fetch process. `undefined` if there is no error.|
| `loading`          | `boolean`                     | A boolean indicating whether the country detection is in progress.          |
| `getCountryByIP`   | `() => Promise<void>`         | A method to manually retry fetching the country.                            |

### Important types and interfaces

#### `Country`

Exposed directly from `country-list-with-dial-code-and-flag`. Please refer to their official [documentation](https://zin-kyaw-kyaw.gitbook.io/country-flags/usage#country) for more details.

| Property         | Type     | Description                                                   |
|------------------|----------|---------------------------------------------------------------|
| `name`           | `string` | The name of the country (e.g., "Canada").                     |
| `flag`           | `string` | The emoji representation of the country's flag (e.g., "🇨🇦"). |
| `code`           | `string` | The ISO country code (e.g., "CA").                            |
| `dialCode`       | `string` | The country's dial code (e.g., "+1").                         |
| `currency`       | `string` | The name of the country's currency (e.g., "Canadian Dollar"). |
| `currencySymbol` | `string` | The symbol of the country's currency (e.g., "$").             |
| `currencyCode`   | `string` | The ISO currency code (e.g., "CAD").                          |
| `localName`      | `string` | The local name of the country in its native language.         |

##### Example

```json
{
  "name": "Canada",
  "flag": "🇨🇦",
  "code": "CA",
  "dialCode": "+1",
  "currency": "Canadian Dollar",
  "currencySymbol": "$",
  "currencyCode": "CAD",
  "localName": "Canada"
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT