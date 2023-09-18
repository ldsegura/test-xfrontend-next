import Link from "next/link";

const Footer = (props) => {
    const {copy, links, locale} = props;
    console.log(links)
    return ( <footer className="footer">
        <div className="footer-body">
            <div>{copy}</div>
            <div className="footer-links">{links.map((item, i) => {
                return (<Link locale={locale} key={i} href={item.href}>{item.tittle}</Link>)
            })}</div>
        </div>
    </footer> );
}
 
export default Footer;