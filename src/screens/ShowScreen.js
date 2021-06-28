import React,{useContext} from 'react';
import { Text,View,StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) =>{

    const {state} = useContext(Context);
    // state is big list of all the blog posts that we have
    // console.log(navigation.getParam('id'));
    const blogPost = 
    state.find((blogPost)=> blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.fontStyle}>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 20
    }
});


export default ShowScreen;