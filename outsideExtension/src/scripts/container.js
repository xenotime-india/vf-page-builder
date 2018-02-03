import React from 'react';
import Header from './components/Header';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';

class Container extends React.Component {

    render() {
        const styles = {

            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: 0
            }
        };

        return (
            <div>
                <Header/>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withWidth()(Container);