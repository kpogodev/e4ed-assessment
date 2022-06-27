import SVGSprite from 'components/SVGSprite'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <SVGSprite />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
