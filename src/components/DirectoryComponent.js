import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { CAMPSITES } from '../shared/campsites';

function RenderDirectoryItem({ campsite }) { // Functional Component
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}


function Directory(props) { // Presentational / Pure

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );

}

export default Directory;