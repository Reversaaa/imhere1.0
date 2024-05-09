import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        flex: 1,
        color: '#FFF',
        alignItems: 'center',
        fontSize: 16,
        marginLeft: 16

    },
    buttonText:{
        color: '#fff',
        fontSize: 14,
      },
      button:{
        width:72,
        height:55,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },


});