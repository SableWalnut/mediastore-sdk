module.exports = {
  ENVIRONMENT_CONFIGURATION: {
    GB_API_URL: JSON.stringify(
      'https://ke4vfe4m32.execute-api.eu-west-1.amazonaws.com/dev'
    ),
    USE_API_MOCK: true,
    GOOGLE_TAG_MANAGER: JSON.stringify('GTM-XXX'),
    OFFER_ID: JSON.stringify('S705970293_NL'),
    ADYEN_PUBLIC_KEY: {
      'https://gummybear-staging.cleeng.com': JSON.stringify(
        'pub.v2.7814375173870120.aHR0cHM6Ly9ndW1teWJlYXItc3RhZ2luZy5jbGVlbmcuY29t.T9omOG5PPfYe0dkMnWB1pmS5TJ1H4UIkCZEyw7d7IEY'
      )
    },
    WEB_API: JSON.stringify('https://cleengtest:cl33test!@staging.cleeng.com')
  }
};
