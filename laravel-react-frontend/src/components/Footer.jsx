import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <section className="footer__social py-1 bg-primary">
        <div className="footer__social_icon container d-flex justify-content-center align-items-center">
          <ul className="d-none d-md-flex text-white">
            <li>Follow us on :</li>
          </ul>
          <ul>
            <li className="fb flat-icon wow animate__fadeInLeftBig" data-wow-delay=".3s"><a target="_blank" href="https://facebook.com/AnshuMemorialAcademy/"><i className="fa fa-facebook" /></a></li>
            <li className="tw flat-icon wow animate__fadeInLeftBig" data-wow-delay={0}><a target="_blank" href="https://twitter.com/AnshuMemorial/"><i className="fa fa-twitter" /></a></li>
            <li className="ig flat-icon wow animate__fadeInRightBig" data-wow-delay={0}><a target="_blank" href="https://instagram.com/AnshuMemorial/"><i className="fa fa-instagram" /></a></li>
            <li className="yt flat-icon wow animate__fadeInRightBig" data-wow-delay="0.3s"><a target="_blank" href="https://youtube.com/channel/UC-Y-AzTd9CCYbbUqAthmHVg"><i className="fa fa-youtube" /></a></li>
          </ul>
        </div>
      </section> */}
      <section className="footer-links">
        <div className="p-3">&nbsp;
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Student Panel</NavLink> {" "} |{" "}
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Teacher Panel</NavLink> {" "}|{" "}
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Admin Panel</NavLink> {" "}|{" "}
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Privacy-Policy</NavLink> {" "}|{" "}
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Disclaimer</NavLink> {" "}|{" "}
          <NavLink className="footer-link" target="_blank" rel="noreferrer" to="/">Terms &amp; Conditions</NavLink>
        </div>
      </section>
      <section className="copyright my-auto py-2 py-md-3  text-center"> ©
        2021 <Link className="text-lightgrey" to="./"><strong>Anshu Memorial Academy</strong>. </Link><span className="d-none d-md-inline me-5"> All Right Reserved. </span>
        <hr style={{ maxWidth: 300 }} className="bg-muted my-1 w-50 mx-auto d-md-none" /> <span className="d-block d-md-inline"> Designed &amp; Developed by <Link rel="norefferer" target="_blank" to="https://skwebs.github.io">SKWebs</Link></span>
      </section>
    </>
  )
}

export default Footer
