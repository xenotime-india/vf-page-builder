import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../../styles';

const PageBase = (props) => {

    return (
        <div>
            <Paper style={globalStyles.paper}>
                {props.children}

                <div style={globalStyles.clear}/>

            </Paper>
        </div>
    );
};

export default PageBase;