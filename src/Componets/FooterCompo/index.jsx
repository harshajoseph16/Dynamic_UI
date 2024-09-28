import './footercompo.css'

const FooterCompo = (props) => {
    return (
        <div className="col-md-3">
        <div className="footer-sub">

            <h5>{props.heading}</h5>
            <h4>{props.heading2}</h4>
            <p>{props.paragraph}</p>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
            <p>{props.paragraph3}</p>
            <a href="#">{props.link1}</a>
             <a href="#">{props.link2}</a>

<a href="#">{props.link3}</a>

<a href="#">{props.link4}</a>

<a href="#">{props.link5}</a>
<a href="#">{props.link6}</a>

<a href="#">{props.link7}</a>
<a href="#">{props.link8}</a>
<div className="footer-app">
<img src={props.image}></img>
<img src={props.image2}></img>
</div>






        </div>
    </div>
    )
}

export default FooterCompo