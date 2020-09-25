import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Jobs from './component/Jobs';
import Detail from './component/Detail';

function Routes() {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="List" component={Jobs} title="Job List" initial={true} />
                <Scene key="Detail" component={Detail} />
            </Stack>
        </Router>
    );
};

export default Routes;