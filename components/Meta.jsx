import React from 'react'
import Head from 'next/head'

const Meta = ({ title = 'Website', description = 'Lonsdale School website', keywords = 'school, education, education website', children }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
      {children}
      <title>{`LONSDALE SCHOOL ${title}`}</title>
    </Head>
  )
}

export default Meta
