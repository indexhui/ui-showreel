import { useReducer } from 'react';

import WebContext from './WebContext';

const defaultWebState = {
  webList: [],
  filteredList: [],
  isShowDetail: true,
  isShowTech: false,
};

const WebReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DETAIL':
      return {
        ...state,
        isShowDetail: !state.isShowDetail,
      };
    case 'TOGGLE_TECH':
      return {
        ...state,
        isShowTech: !state.isShowTech,
      };
    default:
      return defaultWebState;
  }
};

const WebProvider = props => {
  const [webState, dispatchWebAction] = useReducer(WebReducer, defaultWebState);

  const toggleDetailHandler = () => {
    dispatchWebAction({
      type: 'TOGGLE_DETAIL',
    });
  };

  const toggleTechHandler = () => {
    dispatchWebAction({
      type: 'TOGGLE_TECH',
    });
  };

  const webContext = {
    webList: webState.webList,
    isShowDetail: webState.isShowDetail,
    isShowTech: webState.isShowTech,
    filteredList: webState.filteredList,
    toggleDetail: toggleDetailHandler,
    toggleTech: toggleTechHandler,
    // settingFilter: handleSettingFilter,
    // addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
    // clearCart: clearCartHandler,
  };

  return (
    <WebContext.Provider value={webContext}>
      {props.children}
    </WebContext.Provider>
  );
};

export default WebProvider;
