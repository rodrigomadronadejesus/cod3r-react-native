import React, { Fragment } from 'react';
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';
import Filho from './Filho';

export default props => {

    return (
        <Fragment>
            <Filho a={1} b={25}/>
            <Filho a={10} b={40}/>
            <Filho a={100} b={2000}/>
        </Fragment>
    );
}