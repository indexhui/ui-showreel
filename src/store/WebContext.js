import React from 'react';

const WebContext = React.createContext({
  webList: [],
  filteredList: [],
  isFilterActive: Boolean,
  isShowDetail: Boolean,
  isShowTech: Boolean,
  loadWebList: () => {},
  settingFilter: () => {},
  toggleDetail: () => {},
  toggleTech: () => {},
  // totalAmount: 0,
  // addItem: item => {},
  // removeItem: item => {},
});

export default WebContext;
