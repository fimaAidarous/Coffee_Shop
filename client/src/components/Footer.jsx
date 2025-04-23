import React from "react";
import credits from "../assets/card.png";
import footer from "../assets/foot.png";
import { FaFacebook, FaInstagram, FaTelegram, FaGoogle, FaPhone } from "react-icons/fa6";
import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${footer})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="bg-gradient-to-t from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Health Workers Cafe</h1>
            <p className="text-sm max-w-[300px]">
              "Stay connected with Sip & Savor! ☕✨ Follow us on social media for the latest updates, exclusive offers,
              and coffee inspiration. Your perfect cup is just a sip away!"
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone /> +252 632345678
              </p>
              <p className="flex items-center gap-2">
                <FaMapLocation /> Hargeisa, Somaliland
              </p>
            </div>
          </motion.div>

          {/* Footer links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </motion.div>

          {/* Social links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold mb-2">Payment Methods</h1>
              <img src={credits} alt="credit card" className="w-[40%] h-auto object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Copyright section with a divider */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-8 border-t border-gray-300 pt-4"
        >
          <p className="text-sm">© {new Date().getFullYear()} Health Workers Cafe. All Rights Reserved.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
