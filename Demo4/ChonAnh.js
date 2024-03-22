//npm i expo-image-picker
import React,{useState} from "react";
import { Text,View,Button,Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
const ChonAnh=()=>{
    const [selectedImage, setSelectedImage]=useState(null);
    const pickImage = async () =>{
        let kq=await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        console.log(kq);
        if(!kq.canceled){
            setSelectedImage(kq.assets[0].uri);
        }
    };
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Button title="Chon anh tu thu vien"
            onPress={pickImage}/>
            <Image source={{uri: selectedImage}}
            style={{width:200,height:200}}/>
        </View>
    );

}
export default ChonAnh;