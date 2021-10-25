import * as React from 'react'
import {View, Text, StyleSheet  } from 'react-native'
export default class Fb extends React.Component{
    render(){
        return(
            <View style = {styles.veiw}>
                <Text style = {styles.centre }>
                    Discord
                </Text>
            </View>
        )
    }


}
const styles = StyleSheet.create({
    centre :{justifyContent : "center",
    alignItems : "center",
    fontWeight:500,
    color: "red"    
}
,veiw :{flex :1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor :"white"}
})