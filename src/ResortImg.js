import React from 'react';
import './ResortImg.css';
function ResortImg(props) {
    return (
        <div className="ResortImg-Container">
             <div className="firstHalf">
<img className="item1" src="https://et-website.s3.amazonaws.com/uploads/2015/09/Chicken-BiryanI-Enchanting-Travels-India-Tours.jpg"></img>
             </div>
             <div className="secondHalf">
             <img className="item2" src="https://et-website.s3.amazonaws.com/uploads/2015/09/Chicken-BiryanI-Enchanting-Travels-India-Tours.jpg"></img>
             <img className="item2" src="https://et-website.s3.amazonaws.com/uploads/2015/09/Chicken-BiryanI-Enchanting-Travels-India-Tours.jpg"></img>
             {/* <img className="item2" src="https://et-website.s3.amazonaws.com/uploads/2015/09/Chicken-BiryanI-Enchanting-Travels-India-Tours.jpg"></img>
             <img className="item2" src="https://et-website.s3.amazonaws.com/uploads/2015/09/Chicken-BiryanI-Enchanting-Travels-India-Tours.jpg"></img> */}

             </div>
        </div>
    );
}

export default ResortImg;