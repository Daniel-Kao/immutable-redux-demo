import React, { memo, useEffect } from 'react';

const About = memo(() => {
  useEffect(() => {
    console.log('in about');
  });
  return <div>about</div>;
});

export default About;
