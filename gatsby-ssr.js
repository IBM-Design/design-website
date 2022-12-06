import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return null;
  }

  const script = `
  if(!window) window = {};
  window.idaPageIsSPA = false;
  window.digitalData = {
    page: {
      category: {
        primaryCategory: 'PC010',
      },
      pageInfo: {
        ibm: {
          siteID: 'WWW_DESIGN',
          country: 'US',
          industry: 'Design',
          owner: 'Alison Joseph/Austin/IBM',
        },
      },
    },
  }`;

  return setPostBodyComponents([
    <script key="digital-data" dangerouslySetInnerHTML={{ __html: script }} />,
    <script
      defer
      key="core-metrics"
      src="https://1.www.s81c.com/common/stats/ibm-common.js"
      type="text/javascript"
    />,
  ]);
};
