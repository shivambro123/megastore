import React from "react";
import "./TrendingPostcss.css";
import { NavLink } from "react-bootstrap";
import megastore_box_01 from "../Images/megastore_box_01.jpg";
import megastore_box_02 from "../Images/megastore_box_02.jpg";
import megastore_box_03 from "../Images/megastore_box_03.jpg";

const TrendingPost = () => {
  return (
    <>
      <div className="trendpostwrapper container">
        <div className="trendingPoster">
          <div className="trendpostheader">
            <div className="trend">
              <h3>Trending Collection</h3>
            </div>
            <div className="shopcategory">
              <NavLink to="/shop">
                Shop all categories
                <i class="fa fa-caret-right mx-1" aria-hidden="true"></i>

              </NavLink>
            </div>
          </div>
          <hr></hr>
          <div className="trendcontent">
            <div className="innerTrenPost">
              <div className="trendimage">
                <img
                  src={megastore_box_01}
                  alt="text"
                  className="trendimgsize"
                />
              </div>
              <div className="trendpostdata">
                <h3>The Oversized Alpaca Crew</h3>
                <NavLink>Shop now</NavLink>
              </div>
            </div>
            <div className="innerTrenPost">
              <div className="trendimage">
                <img
                  src={megastore_box_02}
                  alt="text"
                  className="trendimgsize"
                />
              </div>
              <div className="trendpostdata">
                <h3>The Premium-Weight Crew</h3>
                <NavLink>Shop now</NavLink>
              </div>
            </div>
            <div className="innerTrenPost">
              <div className="trendimage">
                <img
                  src={megastore_box_03}
                  alt="text"
                  className="trendimgsize"
                />
              </div>
              <div className="trendpostdata">
                <h3>The Forever High-Top</h3>
                <NavLink>Shop now</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingPost;
