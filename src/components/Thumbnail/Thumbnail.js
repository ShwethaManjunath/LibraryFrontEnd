import React from 'react';

import Aux from '../../hoc/Auxh';

import './Thumbnail.css'

const thumbnail = (props) => {

    return (
        <Aux>

            <div className="col-sm-3 mb-3 zoom" onClick={() => props.clicked(props.id)} >
                <img src={props.thumbnail} className="img-thumbnail img-fluid z-depth-1" alt="Responsive image" style={{ width: '150px', height: '200px' }} />
            </div>
        </Aux>
    );
}





export default thumbnail;