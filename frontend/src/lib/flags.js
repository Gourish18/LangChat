import { LANGUAGE_TO_FLAG } from "../constants/index.js";

export const getLanguageFlag = (language) => {
  try {
    if (!language) return null;

    const langLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[langLower];

    if (!countryCode) return null;

    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  } catch (err) {
    console.error("Error in getLanguageFlag:", err);
    return null;
  }
};
