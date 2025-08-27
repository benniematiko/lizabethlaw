import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: #150958;
  padding: 12px 7% 5px 7%;

  ul li {
    display: inline-block;
    list-style: none;
    margin: 5px 20px;
    font-size: 16px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: logo;

  img {
    width: 50px;
    height: 50px;
  }
`;

const Button = styled.button`
  background: #fff;
  color: #150958;
  padding: 14px 25px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 30px;
`;

const MenuBtn = styled.span`
  display: none;

  @media (max-width: 767px) {
    display: block;
    cursor: pointer;
    font-size: 2rem;
  }
`;

const MenuToggle = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.ul`
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;

    padding: 12px 3% 5px 3%;

    position: fixed;

    top: 0;
    right: ${({ open }) => (open ? "0" : "-250px")};
    background: #150958;
    z-index: -1;
    width: 250px;
    padding-top: 70px;
    transition: 0.5s;
    height: 100vh;

    li {
      display: block;
      flex-direction: column;
      margin: 25px 40px;
    }
  }
`;

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Nav className={`Navdark  ${sticky ? "dark-nav" : ""}`}>
      <Logo>
        <Link to="/">
          <img src="./logo__white__bg.png" alt="logo" />
        </Link>
      </Logo>

      <MobileMenu open={mobileOpen}>
        <li>
          <Link to="/">Practice Areas</Link>
        </li>
        <li>
          <Link to="/cases">Cases</Link>
        </li>

        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <Link to="/areasweserve">Areas We Serve</Link>
        </li>
        <li>
          <Link to="/contact">
            <Button>Free Consultation</Button>
          </Link>
        </li>
        {/* <li>
          <Link to="/contact">Call Us: +254 715 860 031</Link>
        </li> */}
      </MobileMenu>

      <MenuToggle onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? "✕" : "☰"}
      </MenuToggle>
    </Nav>
  );
};

export default Navbar;
