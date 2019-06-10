import { useEffect } from "react"
import { navigate } from "gatsby"

const AVAILABLE_LOCALES = ['pt', 'en'];

// fetches the browser language (only the prefix, e.g. "pt", "en", etc.)
function getBrowserLocale() {
  if (!navigator || !navigator.languages) {
    return null
  }

  const locale = navigator.languages[0].substr(0, 2);

  return (AVAILABLE_LOCALES.find((l) => l === locale)) ? locale : null
}

const IndexPage = () => {
  // hook to redirect to the localized index page
  useEffect(() => {
    const browserLocale = getBrowserLocale() || AVAILABLE_LOCALES[0]
    navigate(`/${browserLocale}`)
  })

  return null
}

export default IndexPage
