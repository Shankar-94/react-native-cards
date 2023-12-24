import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

// const picURL = "https://jsonplaceholder.typicode.com/photos";
const picURL = "https://thapatechnical.github.io/userapi/users.json";

const Card1 = ({navigation}) => {

  const[loading, setLoading] = useState(true);
  const[data, setData] = useState([]);

  useEffect(()=>{
    fetch(picURL)
    .then((response)=>response.json())
    .then((res)=>{
      setData(res)
      setLoading(false);
    })
    .catch((error)=>Alert(error))
  })

  return (
    <SafeAreaView style={styles.mainParent}>
      {loading ? (<ActivityIndicator />):(
        <FlatList 
        data={data}
        keyExtractor={({id},index)=>id.toString()}
        renderItem={({item}) =>(
        <View style={styles.parent}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Name: {item.name}</Text>
          <Text style={styles.email}>Email: {item.email}</Text>
          <Image source={{uri: item.image}} style={styles.image}/>
          <Text style={styles.website}>Website: {item.website}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.moreDetails}
          onPress={()=>{
            console.log("More Details", item.id)
            // navigation.navigate("MoreCardDetails", {user: item})
          }}
          >
              <Text style={styles.moreDetailsText}>More Details</Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
        />
      )}
    </SafeAreaView>
  )
}

export default Card1

const styles = StyleSheet.create({
  mainParent: {
    backgroundColor: "#1e95b0",
    padding: 20
  },
  parent: {
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 30,
    width: "80%",
    padding: 20,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,  
    elevation: 8,
    backgroundColor: "#6dcfca"
  },
  textContainer: {
    alignItems: 'center',
    padding: 10
  },
  name: {
    backgroundColor: "#008080",
    padding: 10,
    color: "white",
    elevation: 10,
    borderRadius: 5,
    fontWeight: '600'
  },
  email: {
    backgroundColor: "#E86343",
    padding: 10,
    elevation: 10,
    borderRadius: 5,
    marginTop: 10,
    color: "white",
    fontWeight: "600"
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  website: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#2E97C3",
    elevation: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: '600',
  },
  moreDetails: {
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    elevation: 8,
    backgroundColor: "#3bb385",
    borderRadius: 5
  },
  moreDetailsText: {
    color: "white",
    fontWeight: "500"
  }
})