import React,{useContext} from 'react';
import { View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen =({navigation}) =>{
    // console.log(props);

    const {state,addBlogPost,deleteBlogPost} = useContext(Context);

  return (
      <View>
          {/* <Text> Index screen</Text> */}
          <Button color='black' title="Add Post" onPress={addBlogPost}>

          </Button>
          <FlatList 
          data={state}
          keyExtractor={(blogPost) =>blogPost.title}
          renderItem={({item}) => {
              return(
                <View>
                    <TouchableOpacity 
                    onPress={() =>(navigation.navigate('Show',{id:item.id}))}
                    >
                        <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <Feather style={styles.icon} name="trash"/>
                        </TouchableOpacity>
                        </View>
                  </TouchableOpacity>
                </View>
                  
              ); 
          }}>
          </FlatList>
      </View>
  );  
};


const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title:{
        fontSize:18,
        paddingLeft: 5
    },
    icon: {
        fontSize: 24,
        paddingRight: 20
    },
    buttonstyling:{
        color: 'red',
        fontSize: 18
    }
});

export default IndexScreen;