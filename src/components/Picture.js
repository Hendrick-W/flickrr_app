import React, {useEffect, useState, useRef, useCallback} from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Picture = ({
  imageUrl, title, imagelink, author, authorId
}) => {
	const author_name = author.match(/"(.*?)"/)[1]
	const [aspectRatio, setAspectRatio] = useState(1/2)
	const [realHeight, setRealHeight] = useState(0)
	const [realWidth, setRealWidth] = useState(0)
	const navigation = useNavigation();
	let srcheight = 0
	let srcwidth = 0
	const maxHeight = Dimensions.get('window').height;
  const maxWidth = Math.round(Dimensions.get("screen").width);

	const loadImageSize = (imageUrl) => {
		return new Promise((resolve, reject) => {
			Image.getSize(imageUrl, (width, height) => {
				resolve({width, height})
			}, reject)

		})
	}
	
	return (
  <View style={{ marginBottom: 30, backgroundColor:'#fff'}}>
		<TouchableOpacity style={{
			paddingVertical: 2
		}}
			onPress={()=>{
				navigation.navigate('Detail')
			}}
		>
		<Image source={{uri:imageUrl}}
			onLoadStart={async (e)=>{
				const {height, width} = await loadImageSize(imageUrl)
				setRealHeight(height)
				setRealWidth(width)
				srcheight = height
				srcwidth = width
				const ratio = Math.min(maxWidth / srcwidth, maxHeight / srcheight);
				setAspectRatio(ratio)
			}}
			style={{width: (realWidth-2) * aspectRatio , height:(realHeight) * aspectRatio, alignSelf:'center', }}
		/>
		</TouchableOpacity>
		<TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
			<Icon name="person-circle" size={45} color={'#d8d8d8'}/>
			<Text>{author_name}</Text>
		</TouchableOpacity>
		<Text style={{alignSelf:'center', fontSize: 20, textAlign:'center', fontWeight:'bold'}}>{title}</Text>
  </View>
)}

export default Picture;
