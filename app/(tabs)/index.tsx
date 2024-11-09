import { StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import Card from '@/components/Card'

const index = () => {

  const product = {
    name:"btata" , 
    parice : 10 , 
    rating : 4.5 , 
    discount : 10 , 
  }

  return (
    <View style={styles.container}>
     <View style={styles.rectangle}>
     <View style={styles.rectangle1}>
     <View style={styles.Box}></View>

      <View>

     <Text style={styles.txt}>aied essa</Text>
     <Text style={styles.txt1}>12,3,2005 </Text>
     </View>

     </View>
     <Text style={styles.txt2}>my first ui</Text>

      </View>
      {/* <Card name='aied' year='2005' point='100'/> */}
      <Card item={product}/>
</View>
  )
}

export default index

const styles = StyleSheet.create({
  
  container:{
    flex  :1,
    backgroundColor:"white",  
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    
  },
  rectangle:{

borderWidth:1,

justifyContent:'center',
alignItems:'center',

  },
rectangle1:{
  width:300,
  height:150,
  // padding:50,
  // borderWidth:2,
  flexDirection:'row'

},
Box:{
  backgroundColor:'black',
  width:100,
  height:100,
  // borderWidth:2,
  // borderColor:'white'



},
txt:{
  color:'black',
  fontSize:30,
textAlign:'right',
// borderWidth:2,






},
txt1:{
color:'black',
fontSize:30,
textAlign:'right',
// borderWidth:2,


},
txt2:{
  color:'black',
  fontSize:50,
textAlign:'center',
// borderWidth:2,



},







  }
    
)
  
