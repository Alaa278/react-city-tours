import React, { Component } from 'react'
import  './TourList.css'
import Tour from '../Tour/Tour'
import { tourData } from '../Tour/TourData'

export default class TourList extends Component {
    state={
        tours:tourData
    };
    remveTour=id =>{
        const {tours} = this.state ;
        const sortedTours= tours.filter(tour => tour.id !==id)
        this.setState({
            tours: sortedTours 
        });
    };

    render() {
        const {tours}= this.state
        console.log(tours)
        return (
            <div>
               <section className='tour-list'>
                 {tours.map(tour => {
                    return <Tour key={Tour.id} tour={tour} remveTour={ this.remveTour} />
                 })
                 }
                </section> 
            </div>
        )
    }
}
