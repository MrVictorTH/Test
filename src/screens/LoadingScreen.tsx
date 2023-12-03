import React, {useState, useEffect, memo} from 'react'
// import { Navigation } from '../types';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from '../components/Header';
import Background from '../components/Background';
import Text from 'react-native'

// type Props = {
//     navigation: Navigation;
// };

const LoadingScreen = () => {
    return (
        <Background>
            <Spinner
                visible={true}
                overlayColor={'#204496'}
                textContent={'Loading...'}
                textStyle={{color: '#fff'}}
            />
        </Background>
      );
}

// const LoadingScreen = ({ navigation }: Props) => {
//     const dest = navigation.getParam('dest');
//     // const [loading, setLoading] = useState(false);
  
//     // useEffect(() => {
//     //   setLoading(true);
//     //   setTimeout(() => {
//     //     setLoading(false);
//     //   }, 1500);
//     // }, []);

//     return (
//         <Background>
//             <Header>Loading</Header>
//         </Background>
//       );

//           // return (
//     //   <Background>
//     //     {loading ? (
//     //       <Header>Loading</Header>
//     //     ) : ()=> navigation.navigate(dest)}
//     //   </Background>
//     // );
//   };
  

// // const [loading, setLoading] = useState(false)

// // useEffect(() => {
// //     setLoading(true)
// //     setTimeout(() => {
// //         setLoading(false)
// //     }, 1500)
// // }, [])

export default memo(LoadingScreen);