"use client";
import { useAppselector } from "@/redux/hooks";
import { setCurrencyReducer } from "@/redux/features/currencyReducer";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = (props) => {
  const { logo, menu } = props;
  const { contact, currency, lang } = menu;
  const stateCurrency = useAppselector((state) => state.currencyReducer);
  return (
    <header>
      <Navbar className="bg-body-tertiary header">
        <Container>
          <Navbar.Brand href={{ pathname: "/" }} as={Link} locale={lang.title}>
            <img src={logo} alt={"xcaret"} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="menu-collapse justify-content-end">
          <Navbar.Text className="text-uppercase">{contact}</Navbar.Text>
            <Nav.Link
              as={Link}
              href={{ pathname: lang.href }}
              locale={lang.title}
              className="text-uppercase"
            >
              {lang.title}
            </Nav.Link>
            <NavDropdown title={stateCurrency.currency} id="basic-nav-dropdown" className="text-uppercase">
              {currency.map((item, i) => {
                return (
                  <NavDropdown.Item
                    key={i}
                    className={`text-uppercase ${
                      stateCurrency.currency === item ? "active" : ""
                    }`}
                  >
                    {item}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
