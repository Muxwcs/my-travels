import React, { Component, Fragment } from 'react';

const travel = [
    {
        destination: 'Miarritze',
        country: 'Bask Country',
        photo: 'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/38531465_1738909612883146_7970617938757550080_n.jpg?_nc_cat=109&_nc_ht=scontent.flux1-1.fna&oh=bffed88694381042c692899505d923b8&oe=5D4ED746',
        distance: 'Homemade Festival',
    },
    {
        destination: 'Baiona',
        country: 'Bask Country',
        photo: 'https://scontent.flux1-1.fna.fbcdn.net/v/t31.0-8/20989203_10213197762316571_7173923310465020014_o.jpg?_nc_cat=109&_nc_ht=scontent.flux1-1.fna&oh=76eb8d9a6c67c321abf128910a304f20&oe=5D48E044',
        distance: '7 km',
    },
    {
        destination: 'Punk in Drublic Fest',
        country: 'USA',
        photo: 'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/36631730_470614063364157_5386030886313525248_n.jpg?_nc_cat=107&_nc_ht=scontent.flux1-1.fna&oh=9aa205abf76ee1a9199567b8d2998b76&oe=5D3E6049',
        distance: '9200 km',
    },
    {
        destination: 'Tolmin',
        country: 'Slovenia',
        photo: 'https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/39245723_10216159836766581_9175025007342911488_o.jpg?_nc_cat=109&_nc_ht=scontent.flux1-1.fna&oh=d9811cd63ccff30d8b1a43d32380a918&oe=5D47859B',
        distance: '1600 km',
    },
    {
        destination: "Vitoria-Gasteiz",
        country: "Bask country",
        photo: "https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/48420247_1939727842763264_3233250457010831360_o.jpg?_nc_cat=104&_nc_ht=scontent.flux1-1.fna&oh=a1b9836148b7a6b6ffd89be8cf47849e&oe=5D4D4915",
        distance: "150 km",
    },
]

class Travels extends Component {


    render() {
        return (

            <div>
            {travel.map((travel, i) => {
                return (

                    <Fragment key={i}>
                <h1>
                    Welcome to {travel.destination}, {travel.country}
                </h1>
                <img src={travel.photo} className="img" alt="festival"/>
                <h3>
                    {travel.distance} from Biarritz
                </h3>
                </Fragment>
            )
            })}
            </div>

            )

        
    }
}

export default Travels;
