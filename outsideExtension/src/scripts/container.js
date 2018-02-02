import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from './theme-default';

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const paddingLeftDrawerOpen = 236;

        const styles = {

            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: 0
            }
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header styles={styles.header}/>
                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withWidth()(Container);