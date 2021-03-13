import React, {useState} from 'react';
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Picture = ({
  imageUrl,imagelink
}) => {
	const [aspectRatio, setAspectRatio] = useState(3/4)
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
		<TouchableOpacity style={{
			paddingVertical: 2
		}}
			onPress={()=>{
				navigation.navigate('Detail', {imagelink:imagelink})
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
)}

export default Picture;
