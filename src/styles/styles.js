import {StyleSheet } from "react-native";

export const styling = StyleSheet.create({
	main:{
		display: "flex",
		flex: 1,
		
		flexDirection: "column",
		backgroundColor: "skyblue",
		gap:50
        
	},
    accordion:{
        fontSize:15,
        fontWeight:'bold',
    },
	logo:{
		width:200,
		height:200,
		alignSelf:'center',
		paddingTop:20,
		marginTop:30
		
	},
	mehehe:{
		maxWidth:'auto',
		alignSelf:'flex-start',
		position:'relative',
		backgroundColor:'skyblue'

	},
	card: {
		alignSelf:'center'
	}
})