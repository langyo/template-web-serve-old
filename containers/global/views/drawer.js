import { connect } from 'react-redux'

import Drawer from '../../../components/global/views/drawer';

export default config => connect(
  state => {
    return {
      ...state.views.drawer,
      items: config(state)
    };
  }, (dispatch, ownProps) => ({
    onTogglePage: (name) => dispatch({
      type: 'views.drawer.togglePage',
      name
    }),
    onToggleDialog: (name) => dispatch({
      type: 'views.drawer.toggleDialog',
      name
    }),
    onToggleDrawer: () => dispatch({
      type: 'views.drawer.toggleDrawer',
    })
  })
)(Drawer);
