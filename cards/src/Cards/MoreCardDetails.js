import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MoreCardDetails = ({route}) => {
    const {user} = route.params;
  return (
    <View>
      <Text>{user.id}</Text>
    </View>
  )
}

export default MoreCardDetails

const styles = StyleSheet.create({})