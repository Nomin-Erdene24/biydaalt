import React from 'react';
import "./Huudas.css";
const Nomin = () => {
    <link rel="stylesheet" href="/"></link>
}
const Huudas = (props) => {
    return (
        <div className="nomi">
        <div>
        <div className="zzz">{props.ner}</div>
        <div className="Mundag">
        <div className="Zur"><img src={props.zurag} alt="password"></img></div> 
           <div className="Huwiin">
            <div className="o1"><i class="fas fa-signature"></i> <span>Joined : Mar 11, 2015</span></div>
            <div className="o2"><i class="far fa-play-circle"></i> <span> Channel : {props.ner} </span> </div>
            <div className="o2"><i class="fas fa-shapes"></i> <span> Жанр : {props.type} </span></div>
            <div className="o2"><i class="far fa-eye"></i> <span> Үзэлт : 60,885,115 </span></div>
            <div className="dis">
            <button className="b1"><a href={props.yt} class="button"><i class="far fa-play-circle"></i> YOUTUBE-ЭЭС ҮЗЭХ </a></button>
            <button className="b2"> ГОМДОЛ МЭДҮҮЛЭХ </button>
           </div>
           </div>
           <div className="sss">
            <div className="likeee">
             <span className="likeI"><i class="fas fa-thumbs-up"></i></span>
             <span className="likeI"> + 309  </span>
             <span className="likeI2"><i class="fas fa-thumbs-down fa"></i></span>
             </div>
             <div className="Vnelgee"> Үнэлгээ 309 </div>
             <div className="Setgegdel">  Сэтгэгдэл 19 </div>
             <div> <h4> ШЕЙР ХИЙХ </h4></div>
             <div>
             <i class="fab fa-twitter fa-lg"> </i>
             <i class="fab fa-facebook fa-lg"></i>
             <i class="fab fa-facebook-messenger fa-lg"></i>
             <i class="fab fa-telegram fa-lg"></i>
             <i class="fab fa-instagram fa-lg"></i>
             </div>
            </div>
        </div>
        <div className="lorem">
           <div className="iii"><h4>Дэлгэрэнгүй</h4><div className="b23"><h4>Video</h4></div></div>
           <div>{props.delgerengvi}</div>
           <div className="bayraagDee"><iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
        </div>
        </div>
    )
}
export default Huudas;
