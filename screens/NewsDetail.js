import React, {Component, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomNav from '../components/BottomNav';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 


const NewsDetail = ({route}) => {
  const { newsItem } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     
     
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconHolder} onPress={() => navigation.navigate('HomePage')}>
          <Icon name={'arrow-left'} size={23} color="#000" />
        </TouchableOpacity>
        <View style={styles.rightHeader}>
          <TouchableOpacity>
            <Icon name={'share-alt'} size={23} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 15}}>
            <Icon name={'ellipsis-v'} size={23} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newsHeader}>
        <View style={styles.leftNewsHeader}>
          <Image source={require('../media/img/Ellipse.png')} />
          <View style={styles.left2NewsHeader}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'bold',
                lineHeight: 24,
                letterSpacing: 0.12,
              }}>
                {newsItem.source.name}
            </Text>
            <Text
              style={{
                color: '#4E4B66', // Default color or use a variable if available
                fontFamily: 'Poppins', // Font Family
                fontSize: 14, // Font Size
                fontStyle: 'normal', // Font Style
                fontWeight: '400', // Font Weight
                lineHeight: 21, // Line Height (you can use '150%' in CSS directly)
                letterSpacing: 0.12,
              }}>
              {newsItem.publishedAt}
            </Text>
          </View>
        </View>
        <View style={styles.RightNewsHeader}>
          <Button style={styles.FollowButton} title={'Following'}></Button>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={{
            width: '100%',
            height: 230,
            resizeMode: 'stretch',
            borderWidth: 1,
            borderRadius: 6,
          }}
          source={newsItem.urlToImage
            ? { uri: newsItem.urlToImage }
            : require('../media/img/NewsImages.png')}
          
        />
      </View>
      <View style={styles.textHolder}>
        <Text
          style={{
            color: '#4E4B66',
            fontFamily: 'Poppins',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 19.5, 
            letterSpacing: 0.12,
            marginTop: 5,
          }}>
          Europe
        </Text>
      </View>
      <View>
        <Text style={styles.textMedium}>
        {newsItem.title}
        </Text>
      </View>
      <View style={styles.scrollViewContainer}>

          <View style={styles.scrollContent}>
            <Text
              style={{
                color: '#4E4B66',
                fontFamily: 'Poppins',
                fontSize: 1,
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.12,
              }}>
              {newsItem.content}{' '}
            </Text>
          </View>
       
      </View>
      </ScrollView>
   
      <View style={styles.footer}>
        <View style={styles.leftFooter}>
          {/* <View style={styles.leftFooter1}>

                </View> */}
          <Image
            source={require('../media/img/heart.png')}
            style={{height: 20, width: 20}}
          />
          <Text
            style={{
              color: '#4E4B66',
              fontWeight: '600',
              marginLeft: 5,
            }}>
            24.5K
          </Text>

          <Image
            source={require('../media/img/comment.png')}
            style={{height: 20, width: 20,marginLeft:27}}
          />
          <Text
            style={{
              color: '#4E4B66',
              fontWeight: '600',
              marginLeft: 5,
            }}>
            1K
          </Text>
          <Image
            source={require('../media/img/save.png')}
            style={{height: 20, width: 20,marginLeft:170}}
          />
        </View>
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  leftFooter: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  footer: {
    flexDirection: 'row', // Display flex
    // Width
    height: 38, // Height

    borderTopWidth: 0.3,
    paddingVertical: 34, // Padding top and bottom
    paddingHorizontal: 1, // Padding left and right
    justifyContent: 'space-between', 
    alignItems: 'center',
    flexShrink: 0, 
  },

  scrollViewContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 16, 
  },
  textMedium: {
    color: '#000', // Color
    fontFamily: 'Poppins', // Font Family
    fontSize: 24, // Font Size
    fontStyle: 'normal', // Font Style
    fontWeight: '600', // Font Weight
    lineHeight: 36, 
    letterSpacing: 0.12,
  },
  card: {
    marginTop: 16,
    backgroundColor: '#fff',
  },
  FollowButton: {
    flexDirection: 'row', 
    padding: 5,
    paddingHorizontal: 12, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 4,
    minWidth: 50,
    minHeight: 34,
  },
  left2NewsHeader: {
    flex: 1,
    marginTop: 3,
    marginLeft: 5,
    flexDirection: 'column',
  },
  leftNewsHeader: {
    flex: 1,
    flexDirection: 'row',
  },
  newsHeader: {
    marginTop: 16,
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    marginTop: 1,
  },
  header: {
    height: 25,

    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  container: {
    flex: 1,
    paddingTop: 24, 
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // backgroundColor:'black'
  },
});
export default NewsDetail;
