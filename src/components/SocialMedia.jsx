import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';
import { socialMediaData } from '../constants';

const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-wrap gap-4">
        {socialMediaData.map((item, index) => (
          <Tilt className="xs:w-[250px] w-full" key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.2,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
              }}
              className="w-full p-4 rounded-lg shadow-lg"
              style={{
                background: item.color,
                boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              <a href={item.url} className="block">
                <div className="flex justify-center items-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" style={{ filter: 'drop-shadow(2px 4px 6px rgba(255, 255, 255, 0.5))' }} />
                </div>
                <h3 className="text-white text-2xl font-bold text-center">{item.title}</h3>
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default SocialMedia;
