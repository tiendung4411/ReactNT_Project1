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

const NewsDetail = ({route}) => {
  // const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconHolder}>
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
              BBC News
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
              14m ago
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
          source={require('../media/img/NewsImages.png')}
        />
      </View>
      <View style={styles.textHolder}>
        <Text
          style={{
            color: '#4E4B66', // Default color
            fontFamily: 'Poppins',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 19.5, // You can use a numeric value for line height
            letterSpacing: 0.12,
            marginTop: 5,
          }}>
          Europe
        </Text>
      </View>
      <View>
        <Text style={styles.textMedium}>
          Ukraine's President Zelensky to BBC: Blood money being paid for
          Russian oil
        </Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.scrollContent}>
            <Text
              style={{
                color: '#4E4B66',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 24,
                letterSpacing: 0.12,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
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
    justifyContent: 'space-between', // Justify content space-between
    alignItems: 'center', // Align items center
    flexShrink: 0, // Flex shrink
  },

  scrollViewContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 16, // To give some padding at the bottom of the scroll
  },
  textMedium: {
    color: '#000', // Color
    fontFamily: 'Poppins', // Font Family
    fontSize: 24, // Font Size
    fontStyle: 'normal', // Font Style
    fontWeight: '600', // Font Weight
    lineHeight: 36, // Line Height (you can use '150%' in CSS directly)
    letterSpacing: 0.12,
  },
  card: {
    marginTop: 16,
    backgroundColor: '#fff',
  },
  FollowButton: {
    flexDirection: 'row', // Display flex
    padding: 5, // Padding (top, right, bottom, left)
    paddingHorizontal: 12, // Horizontal padding
    justifyContent: 'center', // Justify content center
    alignItems: 'center', // Align items center
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
    paddingTop: 24, // Padding at the top
    paddingLeft: 24, // Padding on the left
    paddingRight: 24,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    // backgroundColor:'black'
  },
});
export default NewsDetail;
