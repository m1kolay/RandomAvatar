import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 30,
      paddingBottom: 30,
    },
    avatarContainer: {
      width: '90%', 
      height: '50%',
    },
    avatarTitle: {
      fontSize: 20, 
      color: '#fff',
    },
    avatarButton: {
      padding: 20,
      backgroundColor:"#333",
      borderRadius: 30
    },
    copyText: {
      textDecorationLine: 'underline',
      color: 'blue',
      marginRight: 20,
      width: '70%',
    },
    copyContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'darkgrey',
      width: '90%',
      padding: 20,
    },
    copyImg: {
      width: 45,
      height:51,
    }
  });
  export default styles