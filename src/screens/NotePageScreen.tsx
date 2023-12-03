import React, { memo, useState, useEffect } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import CircularButton from '../components/CircularButton';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import { Navigation } from '../types';
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingScreen from './LoadingScreen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


type Props = {
    navigation: Navigation
}

const NotePageScreen = ({ navigation }: Props) => {
  const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
  const tableData = [
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '456\n789'],
    ['a', 'b', 'c', 'd']
  ]

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);

  const [noteTitle, setNoteTitle] = useState({ value: '', error: '' });
  const [noteBody, setNoteBody] = useState({ value: '\n\n\n\n', error: '' });
  // const [noteName, setNoteName] = useState<string | undefined>(undefined);
  // const InputPopup = (paramTitle: string, paramMsg: string) => {
  // //   Alert.alert(paramTitle, paramMsg, [
  // //     {
  // //         text: 'Cancel',
  // //         onPress: () =>console.log('Cancel Pressed'),
  // //     },
  // //     {
  // //         text: 'OK',
  // //         onPress: () => console.log('OK Pressed')
  // //     }
  // // ])
  // // Alert.prompt(
  // //   paramTitle,
  // //   paramMsg,
  // //   (text) => {
  // //     // This callback will be triggered when the user submits the input
  // //     setInputText(text);
  // //   },
  // //   'plain-text', // You can change this to 'secure-text' for password input
  // //   inputText, // The initial value of the input field
  // // );
  // const InputPopup = (paramTitle: string, paramMsg: string) => {
  //   Alert.prompt(
  //     paramTitle,
  //     paramMsg,
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => {
  //           // console.log("Cancel Pressed");
  //           setNoteName(undefined)
  //         },
  //         style: "cancel"
  //       },
  //       {
  //         text: "OK",
  //         onPress: password => {
  //           // console.log("OK Pressed, password: " + password);
  //           setNoteName(password);
  //         }
  //       }
  //     ],
  //     'plain-text'
  //   );
  // };

    return (
      ( loading ? 
        (<LoadingScreen />) :
    //     <Background>
    //       <BackButton goBack={() => navigation.navigate('HomeScreen')} />
    //   <View style={styles.headerContainer}>
    //     <View style={{marginRight: 10}}>
    //       <Header>
    //       Your Note
    //       </Header>
    //     </View>
    //     <View>
    //     <CircularButton
    //   icon={({ size, color }) => (
    //     <Icon name="plus" size={16} color={theme.colors.white} style={styles.btnPlusContainer}/>
    //   )}
    //   mode="outlined"
    //   onPress={() => InputPopup('Add New Note', 'Enter your note name')}
  
    //   >
    // </CircularButton>
    //     </View>
    //     <View>
    //     <Header>{noteName}</Header>
    //   </View>
    //   <View>
    //     <TouchableOpacity
    //       onPress={() => navigation.navigate('CommentScreen')}
    //     >
    //       <Text style={{color: theme.colors.secondary}}>Example Note</Text>
    //     </TouchableOpacity>
    //   </View>
    //   </View>
    //   {/* <View style={styles.tableContainer}>
    //     <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
    //       <Row data={tableHead}/>
    //       <Rows data={tableData}/>
    //     </Table>
    //   </View> */}
    // </Background>)
        <Background>
          <Header>
            Your Note
          </Header>
          <View style={styles.row}>
            <Text style={styles.label}>Title</Text>
          </View>
          <TextInput
            label="Enter your note title"
            returnKeyType="next"
            multiline
            value={noteTitle.value}
            onChangeText={text => setNoteTitle({ value: text, error: '' })}
            error={!!noteTitle.error}
            errorText={noteTitle.error}
          />
          <View style={styles.row}>
            <Text style={styles.label}>Description</Text>
          </View>
          <TextInput
            label="Enter your note"
            returnKeyType="done"
            multiline
            value={noteBody.value}
            onChangeText={text => setNoteBody({ value: text, error: '' })}
            error={!!noteBody.error}
            errorText={noteBody.error}
          />
        </Background>
      )
    );

};

const styles = StyleSheet.create({
  //--------------------อันนี้ใช้---------------------------------
  label: {
    flexDirection: 'row',
    textAlign: 'left',
    color: theme.colors.secondary,
  },

  row: {
    marginTop: 4,
    textAlign: 'left'
  },

  button: {
    marginTop: 24,
  },

  //-----------------------------------------------------

  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },

  btnPlusContainer: {
    position: 'relative',
    left: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  tableContainer: {
     flex: 1,
     width: '55%',
     padding: 16, 
     paddingTop: 30, 
     backgroundColor: '#fff'},
     head: { 
      backgroundColor: '#f1f8ff' },
      text: { margin: 6 }
});

export default memo(NotePageScreen);
