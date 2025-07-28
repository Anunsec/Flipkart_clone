const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-sm mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* About */}
          <div>
            <h2 className="font-bold mb-3">ABOUT</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
  
          {/* Group Companies */}
          <div>
            <h2 className="font-bold mb-3">GROUP COMPANIES</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Myntra</li>
              <li>Cleartrip</li>
              <li>Shopsy</li>
            </ul>
          </div>
  
          {/* Help */}
          <div>
            <h2 className="font-bold mb-3">HELP</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
  
          {/* Consumer Policy */}
          <div>
            <h2 className="font-bold mb-3">CONSUMER POLICY</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Cancellation & Returns</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h2 className="font-bold mb-3">Mail Us:</h2>
            <p className="text-gray-400">
              Flipkart Internet Private Limited, <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village, <br />
              Outer Ring Road, Bengaluru, 560103, <br />
              Karnataka, India
            </p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-400 py-4 flex flex-wrap justify-center md:justify-between px-6">
          <div className="flex">
            <div className="flex ml-9" > 
            <img src="/images/sell.svg" className="ml-2"/><p className="text-yellow-400 ml-1">Become a Seller</p>
            </div>
            <div className="flex ml-3" > 
            <img src="/images/advertis.svg" className="ml-2"/><p className="text-yellow-400 ml-1">Advertise</p>
            </div>
            <div className="flex ml-3" > 
            <img src="/images/gift.svg" className="ml-2"/><p className="text-yellow-400 ml-1">Gift Cards</p>
            </div>
            <div className="flex ml-3" > 
            <img src="/images/help.svg" className="ml-2"/><p className="text-yellow-400 ml-1">Help Center</p>
            </div>
           
          <img src="/images/p.svg" className="ml-48"/>
          </div>
          <p className="text-gray-400 mt-2 md:mt-0">© 2007-2025 Flipkart.com</p>
        </div>
      </footer>
    );
  };
  export default Footer;
  