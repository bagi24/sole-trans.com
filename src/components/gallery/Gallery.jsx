import React from "react";
import "./gallery.css";
import photo1 from "../../assets/sole/292357204_3234318400227394_4066076448278349774_n.jpg";
import photo2 from "../../assets/sole/137706535_2832897623702809_3799256577048642001_n.jpg";
import photo3 from "../../assets/sole/26240057_1617592914962493_8115545812445165821_o.jpg";
import photo5 from "../../assets/sole/258342550_3064412437217992_4642259824522359857_n.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo5} alt="" />
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo5} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
