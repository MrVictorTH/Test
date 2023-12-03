import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/bualuang-icon.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 136,
    marginBottom: 12,
  },
});

export default memo(Logo);

// import React, { memo, useState, useEffect } from 'react';
// import { Image, StyleSheet, Dimensions } from 'react-native';
// import logoImg from '../assets/arrow_back.png';

// const Logo = () => {
//   const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     Image.getSize(
//       logoImg,
//       (width, height) => {
//         setImageDimensions({ width, height });
//       },
//       error => {
//         console.error('Error getting image size:', error);
//       }
//     );
//   }, []);

//   return (
//     <Image
//       source={require('../assets/bualuang-icon.png')}
//       style={[styles.image, { width: imageDimensions.width, height: imageDimensions.height }]}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     marginBottom: 12,
//   },
// });

// export default memo(Logo);