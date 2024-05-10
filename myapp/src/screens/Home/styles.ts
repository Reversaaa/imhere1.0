import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color:'#fff',
      fontSize:24,
      fontWeight: 'bold',
      marginTop: 72
    },
    eventDate:{
      color: '#b6b6b6',
      fontSize:16,
      marginTop: 5,
    },

    textInput:{
      flex:1,
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      color: '#fff',
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },

    buttonText:{
      color: '#fff',
      fontSize: 14,
    },
    button:{
      width:72,
      height:55,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
    },
    forms:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 42
    },
    listEmptyText:{
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
    });