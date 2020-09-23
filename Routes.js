import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Jobs from './component/Jobs';
import Items from './component/Items';

function Routes() {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="List" component={Jobs} title="Job List" initial={true} />
                <Scene key="Detail" component={Items} />
            </Stack>
        </Router>
    );
};

export default Routes;