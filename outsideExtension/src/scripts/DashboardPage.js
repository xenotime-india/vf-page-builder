import React from 'react';
import { Flex, Box } from 'reflexbox';
import SidePanel from './components/SidePanel';
import OutputPanel from './components/OutputPanel';

const DashboardPage = (props) => {
    return (
        <Flex>
            <Box w={1/4} p={1}>
                <SidePanel objects={props.objects}/>
            </Box>
            <Box w={3/4} p={1}>
                <OutputPanel/>
            </Box>
        </Flex>

    );
};

export default DashboardPage;