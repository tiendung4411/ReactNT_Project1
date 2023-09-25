import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {Button} from 'react-native-elements';
import SearchBar from '../components/SearchBar';
import HorizontalNav from '../components/HorizontalNav';
import BottomNav from '../components/BottomNav';
import NewsList from '../components/NewLists';

const HomePage = () => {
  const [active, setActive] = useState('technology');
  const [activeTab, setActiveTab] = useState('home');

  const handleNavClick = item => {
    console.log(`[HomePage] Active category set to: ${item}`);

    setActive(item);
  };
  const handleNewsItemPress = newsItem => {
    
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Image
          style={styles.logoHolder}
          source={require('../media/img/Vector.png')}
        />
        <Image
          style={styles.notiHolder}
          source={require('../media/img/bell.png')}
        />
      </View>
      <View style={{marginTop: 16}}>
        <SearchBar />
      </View>
      <View style={styles.newsCard}>
        <View style={styles.trendyHeader}>
          <Text style={styles.trendyText}>Trending</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={{width: '100%', borderWidth: 1, borderRadius: 6}}
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
          <Text style={styles.textMedium}>
            Russian warship: Moskva sinks in Black Sea
          </Text>
          <View style={styles.newsFooter}>
            <View style={styles.footerInfo}>
              <Image source={require('../media/img/NewsAuthor.png')} />
              <Text
                style={{
                  color: '#4E4B66',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: 19.5,
                  letterSpacing: 0.12,
                }}>
                BBC News
              </Text>
              <Image source={require('../media/img/clock.png')} />
              <Text>4h ago</Text>
            </View>
            <Image
              style={{marginRight: 20}}
              source={require('../media/img/dots.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.trendyHeader1}>
        <Text style={styles.trendyText}>Latest</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.navContainer}>
        <HorizontalNav
          items={[
            'All',
            'Sports',
            'Politics',
            'Technology',
            'Health',
            'Science',
            'Entertainment',
            'Books',
            'General',
            'Food',
            'Travel',
          ]}
          activeItem={active}
          onItemPress={handleNavClick}
        />
        <NewsList category={active} onItemPress={handleNewsItemPress} />
      </View>
      
      <BottomNav activeTab={activeTab} onTabSelect={setActiveTab} />
    </View>
  
);
    

};
const styles = StyleSheet.create({
  navContainer: {
    flex: 1, 
    flexDirection: 'column',
 
  },
  footerInfo: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 5,
  },
  newsFooter: {
    display: 'flex', 
    width: 364, 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'cent er',
  },
  textMedium: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  textHolder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  card: {
    marginTop: 16,
    
  },
  newsCard: {
    marginTop: 16,
    flexDirection: 'column',
    // gap: 2,
  },
  trendyHeader1: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  trendyHeader: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  trendyText: {
    fontWeight: 'bold',
    fontFamily: 'poppins',
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  seeAllText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
  },
  logoHolder: {
    width: 99,
    height: 30,
    resizeMode: 'stretch',
  },
  notiHolder: {
    marginTop: 7,
    width: 20,
    height: 22.5,
    flexShrink: 0,
  },
  headerSection: {
    height: 56,
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
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flexDirection: 'column'
   
  },
});
export default HomePage;
