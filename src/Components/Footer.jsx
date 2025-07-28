const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
      <div className="border-t border-gray-400 py-4 flex flex-wrap justify-center md:justify-between px-4 md:px-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex items-center">
            <img src="/images/sell.svg" className="w-5 h-5 mr-1" />
            <p className="text-yellow-400">Become a Seller</p>
          </div>
          <div className="flex items-center">
            <img src="/images/advertis.svg" className="w-5 h-5 mr-1" />
            <p className="text-yellow-400">Advertise</p>
          </div>
          <div className="flex items-center">
            <img src="/images/gift.svg" className="w-5 h-5 mr-1" />
            <p className="text-yellow-400">Gift Cards</p>
          </div>
          <div className="flex items-center">
            <img src="/images/help.svg" className="w-5 h-5 mr-1" />
            <p className="text-yellow-400">Help Center</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 mt-4 md:mt-0 w-full md:w-auto">
          <img src="/images/p.svg" className="w-28 md:w-auto" />
          <p className="text-gray-400">© 2007-2025 Flipkart.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
