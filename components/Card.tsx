import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
    const{name,year,point}=props.item
  return (
    <View>
      <Text>{name}</Text>
      <Text>{year}</Text>
      <Text>{point}</Text>
    </View>
  )
}
 
export default Card

const styles = StyleSheet.create({})