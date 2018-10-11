import React from 'react';
import { Button, Fa } from 'mdbreact';

import Aux from '../../hoc/Auxh';

 const search = (props) => {
    return (
        <Aux>
            <div className="container" style={{ marginTop: "2%" }}>
                <div className="row justify-content-md-center ">
                    <div className="col-12 col-md-auto ">
                        <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Enter your text to search" aria-label="Search" onChange={props.onchange} />
                        <Button outline color="secondary" onClick={props.onclick}>Search <Fa icon="search" className="ml-2" /></Button>
                    </div>

                </div>
            </div>
        </Aux>
    );
}
export default search;