import React, { useState }  from 'react';
import * as Clipboard from 'expo-clipboard';
import { SvgUri } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './src/style';
import copyImage from './assets/img/copy.png';


export default function App() {
  const [avatarLink, setAvatarLink] = useState(null)


  const copyToClipboard = () => {
    Clipboard.setString(avatarLink);
    alert("Текст скопирован в буфер обмена")
  };

  const getPhoto = () => {
    fetch("http://192.168.88.31:5002/api/generate")
    .then(response => response.json())
    .then(responseJson => setAvatarLink(responseJson.url)) 
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      {!avatarLink ? <Text>Нажмите Сгенерировать аватарку </Text> :
     <>
      <View style={styles.avatarContainer}>
          <SvgUri width="100%" height="100%" uri={avatarLink}/>
      </View>
          <View style={styles.copyContainer}>
            <Text style={styles.copyText}>{avatarLink}</Text>
            <Pressable onPress={() => copyToClipboard()}>
              <Image source={copyImage} style={styles.copyImg}/>
            </Pressable>
          </View>
      </>
      }
      <Pressable style={styles.avatarButton}
        onPress={() => getPhoto()}>
        <Text style={styles.avatarTitle}>Сгенерировать аватарку</Text>
      </Pressable>
    </View>
  );
}



