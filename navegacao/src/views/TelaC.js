
import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    const route = props.route  
    && props.route.params 
    && props.route.params.numero ? 
    props.route.params.numero : 0;


    const r = props.route;
    const numero = r && r.params && r.params.numero ?  r.params.numero : 0;

    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - { numero }
        </TextoCentral>
    );
}