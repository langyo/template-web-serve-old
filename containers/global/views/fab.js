import { connect } from 'react-redux'

import Fab from '../../../components/global/views/fab';

export default () => connect(
  state => {
    return {
      ...state.views.drawer
    };
  }, (dispatch, ownProps) => ({
    onToggleDrawer: () => dispatch({
      type: 'views.drawer.toggleDrawer'
    })
  })
)(Fab);
