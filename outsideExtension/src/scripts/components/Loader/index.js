import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import { Flex, Box } from 'reflexbox';
import globalStyles from '../../styles';

const style = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

const Loader = () => (
    <Dialog
        bodyStyle={{margin:0, padding:0}}
        open={true}
        style={{width: '200px', marginLeft: '40%', backgroundColor: 'transparent'}}>
        <Flex align='center' justify='space-between' column={true}>
            <Box align='center' m={2}>
                <CircularProgress size={99} thickness={7} style={style.refresh} color='#d60202'/>
            </Box>
        </Flex>
    </Dialog>
);

export default Loader;