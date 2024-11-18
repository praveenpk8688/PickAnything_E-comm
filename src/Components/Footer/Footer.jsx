// import React, { useEffect } from 'react';
// import styled from 'styled-components';

// const FooterContainer = styled.footer`
//   background-color: #2c3e50;
//   padding: 40px 0;
//   color: #ec1;
//   margin-top: 65rem;
  
// `;

// const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   padding: 0 20px;
// `;

// const FooterSection = styled.div`
//   flex: 1;
//   min-width: 200px;
//   margin-bottom: 20px;
// `;

// const FooterLogo = styled.h2`
//   font-size: 24px;
//   margin-bottom: 10px;
//   color: #349b;
// `;

// const FooterHeading = styled.h3`
//   font-size: 18px;
//   margin-bottom: 10px;
//   color: #349b;
// `;

// const FooterList = styled.ul`
//   list-style-type: none;
//   padding: 0;
// `;

// const FooterListItem = styled.li`
//   margin-bottom: 5px;
// `;

// const FooterLink = styled.a`
//   color: #ecf0f1;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//     color: #3498db;
//   }
// `;

// const Footer = () => {
// //   useEffect(() => {
// //     console.log("Footer component rendered");
// //   }, []);

//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterSection>
//           <FooterLogo>BuyMore</FooterLogo>
//           <p>Your one-stop shop for all your needs.</p>
//         </FooterSection>

//         <FooterSection>
//           <FooterHeading>About Us</FooterHeading>
//           <FooterList>
//             <FooterListItem>
//               <FooterLink href="/careers">Careers</FooterLink>
//             </FooterListItem>
//             <FooterListItem>
//               <FooterLink href="/our-store">Our Store</FooterLink>
//             </FooterListItem>
//             <FooterListItem>
//               <FooterLink href="/about">Company Info</FooterLink>
//             </FooterListItem>
//           </FooterList>
//         </FooterSection>

//         <FooterSection>
//           <FooterHeading>Customer Care</FooterHeading>
//           <FooterList>
//             <FooterListItem>
//               <FooterLink href="/help">Help Center</FooterLink>
//             </FooterListItem>
//             <FooterListItem>
//               <FooterLink href="/returns">Returns & Refunds</FooterLink>
//             </FooterListItem>
//             <FooterListItem>
//               <FooterLink href="/shipping">Shipping Info</FooterLink>
//             </FooterListItem>
//           </FooterList>
//         </FooterSection>

//         <FooterSection>
//           <FooterHeading>Contact Us</FooterHeading>
//           <FooterList>
//             <FooterListItem>Email: support@buymore.com</FooterListItem>
//             <FooterListItem>Phone: (123) 456-7890</FooterListItem>
//             <FooterListItem>Address: 123 Main St, City, Country</FooterListItem>
//           </FooterList>
//         </FooterSection>
//       </FooterContent>
//     </FooterContainer>
//   );
// };

// export default Footer;



// import React from 'react';
// import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// const FooterContainer = styled.footer`
//   background-color: #2c3e50;
//   padding: 40px 0 20px;
//   color: #ecf0f1;
//   margin-top: 65rem;
// `;

// const FooterContent = styled.div`
//   display: flex;
//   justify-content: space-between;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   padding: 0 20px;
//   background-color: #2c3e50;

// `;

// const FooterSection = styled.div`
//   flex: 1;
//   min-width: 200px;
//   margin-bottom: 20px;
//   background-color: #2c3e50;

// `;

// const FooterLogo = styled.h2`
//   font-size: 24px;
//   margin-bottom: 10px;
//   color: #3498db;
//   background-color: #2c3e50;

// `;

// const FooterHeading = styled.h3`
//   font-size: 18px;
//   margin-bottom: 10px;
//   color: #3498db;
//   background-color: #2c3e50;

// `;

// const FooterList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   background-color: #2c3e50;

// `;

// const FooterListItem = styled.li`
//   margin-bottom: 5px;
//   background-color: #2c3e50;

// `;

// const FooterLink = styled.a`
//   color: #ecf0f1;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//     color: #3498db;
//   }
//   background-color: #2c3e50;

// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-top: 10px;
//   background-color: #2c3e50;

// `;

// const SocialIcon = styled.a`
//   color: #ecf0f1;
//   font-size: 20px;
//   &:hover {
//     color: #3498db;
//   }
//   background-color: #2c3e50;

// `;

// const Copyright = styled.div`
//   text-align: center;
//   margin-top: 20px;
//   padding-top: 20px;
//   border-top: 1px solid #34495e;
//   background-color: #2c3e50;

// `;

// const Footer = () => {
//   return (
    // <FooterContainer>
    //   <FooterContent>
    //     <FooterSection>
    //       <FooterLogo>BuyMore</FooterLogo>
    //       <p>Your one-stop shop for all your needs.</p>
    //       <SocialIcons>
    //         <SocialIcon href="#"><FaFacebook /></SocialIcon>
    //         <SocialIcon href="#"><FaTwitter /></SocialIcon>
    //         <SocialIcon href="#"><FaInstagram /></SocialIcon>
    //         <SocialIcon href="#"><FaLinkedin /></SocialIcon>
    //       </SocialIcons>
    //     </FooterSection>

    //     <FooterSection>
    //       <FooterHeading>About Us</FooterHeading>
    //       <FooterList>
    //         <FooterListItem>
    //           <FooterLink href="/careers">Careers</FooterLink>
    //         </FooterListItem>
    //         <FooterListItem>
    //           <FooterLink href="/our-store">Our Store</FooterLink>
    //         </FooterListItem>
    //         <FooterListItem>
    //           <FooterLink href="/about">Company Info</FooterLink>
    //         </FooterListItem>
    //       </FooterList>
    //     </FooterSection>

    //     <FooterSection>
    //       <FooterHeading>Customer Care</FooterHeading>
    //       <FooterList>
    //         <FooterListItem>
    //           <FooterLink href="/help">Help Center</FooterLink>
    //         </FooterListItem>
    //         <FooterListItem>
    //           <FooterLink href="/returns">Returns & Refunds</FooterLink>
    //         </FooterListItem>
    //         <FooterListItem>
    //           <FooterLink href="/shipping">Shipping Info</FooterLink>
    //         </FooterListItem>
    //       </FooterList>
    //     </FooterSection>

    //     <FooterSection>
    //       <FooterHeading>Contact Us</FooterHeading>
    //       <FooterList>
    //         <FooterListItem>Email: support@buymore.com</FooterListItem>
    //         <FooterListItem>Phone: (123) 456-7890</FooterListItem>
    //         <FooterListItem>Address: 123 Main St, City, Country</FooterListItem>
    //       </FooterList>
    //     </FooterSection>
    //   </FooterContent>
    //   <Copyright>
    //     &copy; {new Date().getFullYear()} BuyMore. All rights reserved.
    //   </Copyright>
    // </FooterContainer>
//   );
// };

// export default Footer;


import React from 'react';
// import './Footer.css';
import '../Css/Footer.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section-main">
          <h2 className="footer-logo">
            <img src="Images/achieversIT.png" id='logo2' alt="BuyMore" />
          </h2>
          <p className="footer-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium doloribus molestiae illo pariatur minus recusandae maxime cumque, harum quisquam repellendus nemo vero modi ea, deserunt laborum dolorum! Enim, facilis.</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">Careers</a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">Our Store</a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">Our Cares
            </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">Terms & Conditions</a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Customer Care</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">Help Center
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">How to Buy
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">Track Your Order
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">Corporate & Bulk Purchasing
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">Returns & Refunds
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us
          </h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/careers" className="footer-link">70 Washington Square South, New York, NY 10012, United States</a>
            </li>
            <li className="footer-list-item">
              <a href="/our-store" className="footer-link">Email: example@gmail.com
              </a>
            </li>
            <li className="footer-list-item">
              <a href="/about" className="footer-link">Phone: +1 1123 456 780
              </a>
            </li>
          </ul>
        </div>

        {/* Add more sections as needed */}

      </div>
    </footer>
  );
};

export default Footer;