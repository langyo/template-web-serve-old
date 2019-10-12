import { connect } from 'react-redux'

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import Main from '../../../components/pages/index/main';

const mapStateToProps = (state) => ({
  theme: createMuiTheme({
    palette: {
      primary: {
        main: state.views.theme.color.primary
      },
      secondary: {
        main: state.views.theme.color.secondary
      },
      error: red
    },
    typography: {
      useNextVariants: true,
    }
  })
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)