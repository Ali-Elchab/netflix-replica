import React from "react";
import "../styles/footer.css";
import globeIcon from "../assets/images/globe-icon.png";
import dropdownIcon from "../assets/images/dropdown-icon.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <p className="top">
          <a href="https://help.netflix.com/contactus">
            Questions? Contact us.
          </a>
        </p>
        <ul className="footerLinks">
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://help.netflix.com/support/412"
            >
              FAQ
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="https://help.netflix.com/">
              Help Center
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="/">
              Account
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="https://media.netflix.com/">
              Media Center
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="http://ir.netflix.com/">
              Investor Relations
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="https://jobs.netflix.com/jobs">
              Jobs
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="/">
              Ways to Watch
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://help.netflix.com/legal/termsofuse"
            >
              Terms of Use
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://help.netflix.com/legal/privacy"
            >
              Privacy
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://www.netflix.com/lb-en/browse/genre/34399#"
            >
              Cookie Preferences
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://help.netflix.com/legal/corpinfo"
            >
              Corporate Information
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="https://help.netflix.com/contactus">
              Contact Us
            </a>
          </li>
          <li className="footerLinkItem">
            <a className="footerLink" href="https://fast.com/">
              Speed Test
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://help.netflix.com/legal/notices"
            >
              Legal Notices
            </a>
          </li>
          <li className="footerLinkItem">
            <a
              className="footerLink"
              href="https://www.netflix.com/lb-en/browse/genre/839338"
            >
              Only on Netflix
            </a>
          </li>
        </ul>
        <div className="selectionContainer">
          <div className="selectionWrapper">
            <div className="selectArrow">
              <img src={globeIcon} alt="globe icon" className="globeIcon" />
              <img
                src={dropdownIcon}
                alt="dropdown icon"
                className="dropdownIcon"
              />
              <select defaultValue="en" className="selectBox" tabIndex={0}>
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
