import React, { useEffect, useState } from 'react';
import {  View, Text, FlatList, StyleSheet, Image } from 'react-native';

const HookEffect = () => {

  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);

    useEffect( () => {
        getUserData();
    }, [])

    const getUserData = async() => {
        try {
            const response = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const myData = await response.json();
            console.log(myData);
            setUserData(myData);
            setIsLoaded(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <View style={styles.kingView}>
        <FlatList 
          data={userData}
          renderItem={( {item} ) => {
            return(
              <View style={styles.mainView}>
                <View>
                  <Image
                    style={styles.imgStyle}
                    resizeMode="cover"
                    source={{uri: item.image}}
                  />
                </View>
                <Text style={styles.textView3}>
                  Roll No: {item.id < 10 ? `0${item.id}` : `${item.id}`}
                </Text>
                <Text style={styles.textView1}>Name: {item.name}</Text>
                <Text style={styles.textView2}>Email: {item.email}</Text>
                <Text style={styles.textView2}>Phone: {item.mobile}</Text>
              </View>
            )
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    kingView: {
      //marginVertical: 10,
      alignItems: "center",
      padding: 40,
      //borderColor: "red",
      //borderWidth: 2,
      backgroundColor: "#7F00FF"
    },
    mainView: {
      marginVertical: 30,
      borderColor: "white",
      borderWidth: 5,
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "yellow",
      justifyContent: "space-around"
    },
    imgStyle : {
      width: "100%",
      height: undefined,
      aspectRatio: 1,
    },
    textView1: {
      fontSize: 24,
      fontWeight: "900"
    },
    textView2: {
      fontSize: 17,
      marginBottom: 3
    },
    textView3: {
      fontSize: 15,
      fontWeight: "bold",
    },
  })

export default HookEffect;
