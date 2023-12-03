import React, { memo, useState, useEffect } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import TextInput from '../components/TextInput';
import { Navigation } from '../types';
import { StyleSheet, View } from 'react-native';
import { theme } from '../core/theme';
import LoadingScreen from './LoadingScreen';
import { Card } from '@rneui/themed';
import CircularButton from '../components/CircularButton';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {
    navigation: Navigation
}

const CommentScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);
  
  const [commentBody, setCommentBody] = useState({ value: '\n\n\n\n', error: '' });

    return (
      ( loading ? 
        (<LoadingScreen />) :
        <Background>
          <BackButton goBack={() => navigation.navigate('NotePageScreen')} />
          <Card.Title style={styles.cardTitle}> 
          Comment
          </Card.Title>
        <Card.Divider/>
        <TextInput
          label="Enter your comment"
          returnKeyType="done"
          multiline
          value={commentBody.value}
          onChangeText={text => setCommentBody({ value: text, error: '' })}
          error={!!commentBody.error}
          errorText={commentBody.error}
        />
        <View style={{position:"relative",alignItems:"center"}}>
        <CircularButton style={{position: 'relative'}}
      icon={({ size, color }) => (
        <Icon name="trash" size={16} color={theme.colors.white} style={styles.btnPlusContainer}/>
      )}
      mode="outlined"
      >
    </CircularButton>
        </View>
    </Background>)
    );

};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },

  cardTitle: {
    fontSize: 26,
    color: theme.colors.secondary,
    fontWeight: 'bold',
    paddingVertical: 2,
  },

  btnPlusContainer: {
    position: 'relative',
    left: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
});

export default memo(CommentScreen);

