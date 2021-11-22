import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Button } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Top from './shared/top';
//import { MaterialIcons } from '@expo/vector-icons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonComp from '../shared/button';

const login = () => {

    const [user, setUser] = useState([
        {name:'', password:''},
    ]);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <View style={styles.top}></View>                
                <Text style={styles.title}>Login</Text>

                <View style={styles.inputView} >
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Username" 
                    placeholderTextColor="#9ea1a4"
                    onChangeText={(val) => setUser({name:val})}/>
                    <TextInput  
                    style={styles.inputText}
                    placeholder="Password" 
                    placeholderTextColor="#9ea1a4"
                    secureTextEntry={true}
                    onChangeText={(val) => setUser({password:val})}/>
                </View>

                <View style={styles.fp}>
                    <TouchableOpacity>
                        <Text style={styles.forgotpassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View syles={styles.loginwith}>
                    <Text style={styles.loginwithtext}>Login With : </Text>
                </View>

                <View style={styles.imgs}>
                    <View style={styles.images}>
                        <Image source={require('../assets/google.png')}/>
                        <Image source={require('../assets/facebook.png')}/>
                        <Image source={require('../assets/twitter.png')}/>
                    </View>
                </View>

                <View style={styles.btns}>
                    <View style={styles.buttons}>
                        <ButtonComp text="Login"/>
                        {/* <Button style={styles.signupbtn} title="Signup"/> */}
                    </View> 
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default login

const styles = StyleSheet.create({

    container : {
        flex : 1,
    },

    top : {
        flex : 1.5,
        backgroundColor : '#3683de',
        width: wp('100%'),
        height: hp('30%'),
        resizeMode: 'cover',
        borderBottomLeftRadius :70,
        borderBottomRightRadius : 70,
    },

    title : {
        flex : 0.3,
        marginTop : 35,
        fontSize : 30,
        fontWeight : 'bold',
        textAlign : 'center',
        // backgroundColor: '#5e2f70',
        // height: hp('10%'),
    },

    inputView: {
        flex: 1,
        //backgroundColor: '#303661',
        alignItems: 'center',
    },

    inputText:{
        width:"80%",
        backgroundColor:"#ced6de",
        borderRadius: 10,
        height: hp('8%'),
        fontSize: 20,
        marginVertical: 10, /////////////////////////
        paddingLeft: 20, ////////////////////////////
    },

    fp: {
        flex: 0.3,
        //backgroundColor: 'green',
        justifyContent: 'flex-start',
    },

    forgotpassword: {
        // flex: 0.2,
        color: 'skyblue',
        fontSize: 18,
        paddingLeft: 50,//////////////////////////
    },

    loginwith: {
        //flex: 0.3,
        justifyContent: 'space-around',
        alignContent: 'center',
    },

    loginwithtext: {
        //backgroundColor: 'pink',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c5c1c4',
        letterSpacing: 1.5,
    },

    imgs : {
        flex: 0.45,
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'orange',
    },

    images: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('55%'),
        //backgroundColor: 'yellow',
    },

    btns : {
        flex: 1,
        justifyContent: 'flex-start',
        // alignContent: 'space-around',
        //backgroundColor: 'pink',
    },

    buttons: {
        // flexDirection: 'row',
        //backgroundColor: 'green',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    
})