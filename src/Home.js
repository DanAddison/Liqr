import React, { Component } from "react";
 
class Home extends Component {



  render() {
    return (

      <div className="Home">

        <div className="row row--pad">
          <div className="row__colspaced">

            <h1>Flickr Photo Stream</h1>

            <div className="span4-4 span6-3 span8-third span12-3">
            
              <div className="card">

                <img src="" alt="" className="card__image"/>

                <h2 className="card__title"><a href="#">Image title</a></h2>

                <p className="card__author">by <a href="#">Author name</a></p>

                <p className="card__description">Iusto est voluptate eum vel. Eos non et voluptas quos aspernatur quidem. Aliquid aliquid et consectetur.</p>

                <p className="card__tags"><a href="#">Tag 1</a>, <a href="#">Tag 2</a>, <a href="#">Tag 3</a></p>
              
              </div>

            </div>

          </div>
        </div>

      </div>

    );
  }
}
 
export default Home;