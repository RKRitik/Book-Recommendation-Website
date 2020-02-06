import React, { Component } from 'react';

class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className='container'>
                <h1> My Reviews</h1>
                <div className='row row-content'>
                    Maecenas nec erat dictum, vehicula velit non, scelerisque eros.
                    Morbi feugiat sem vel leo porttitor interdum. In dignissim ipsum dolor, ac ullamcorper tellus suscipit sit amet. Vivamus et mauris tempus, porta purus finibus, consequat lorem. Vestibulum maximus aliquet eros,
                    sed sodales tortor placerat eget. Sed vel ipsum massa.
                    Duis at sem id sem viverra bibendum.
                </div>
            </div>
        );
    }



}


export default Reviews;