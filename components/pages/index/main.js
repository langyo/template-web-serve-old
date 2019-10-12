import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Fab from '../../../containers/global/views/fab';
import Drawer from '../../../containers/global/views/drawer';

import Containers from '../../../configs/containers';

const styles = theme => ({
  main: {
    overflow: 'auto',
    margin: 0,
    padding: 0,
    position: 'relative'
  }
});


class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={this.props.theme}>
        {/* Dialogs */}
        {Object.keys(Containers.index.dialogs).map(key => Containers.index.dialogs[key])}
        {/* Views*/}
        <Fab />
        <Drawer />
        {/* Pages */}
        <div className={classes.main}>
          {"Hello world!"}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Main);