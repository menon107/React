import React from 'react';
import './animated-background.css';

interface AnimatedBackgroundProps {}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-gradient"></div>
  </div>
);

export default AnimatedBackground;