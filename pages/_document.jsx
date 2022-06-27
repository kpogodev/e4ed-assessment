import SVGSprite from 'components/utilities/SVGSprite'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <SVGSprite />
        <Main />
        <div id='portal' />
        <NextScript />
      </body>
    </Html>
  )
}
