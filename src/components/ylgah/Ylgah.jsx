import React from "react";
import Huudas from "../huudas/Huudas";
const Ylgah = (props) => {
  function findLink() {
    let link = "";
    let temp = window.location.hash;
    for (let i = 2; i < temp.length; i++) link += temp[i];
    return link;
  }
  function findType() {
    let type = "";
    for (let i = 0; i < findLink().length; i++) {
      if (findLink()[i] !== "/") type += findLink()[i];
      else break;
    }
    return type;
  }
  function findID() {
    let link = findLink();
    let id = "";
    for (let i = 0; i < link.length; i++) {
      if (!isNaN(link[i])) id += link[i];
    }
    return id;
  }
  let mor = props.prop.filter((el) => {
    if (el.type === findType()) {
      if (el.id === parseInt(findID())) {
        return el;
      }
    }
  });
  return (
    <div>
      <Huudas
        ner={mor[0].ner}
        type={mor[0].type}
        delgerengvi={mor[0].delgerengvi}
        zurag={mor[0].zurag}
        video={mor[0].video}
        yt={mor[0].yt}
      />
    </div>
  );
};
export default Ylgah;