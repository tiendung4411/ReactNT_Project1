import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomNav = ({activeTab, onTabSelect}) => {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabSelect('home')}>
        <View style={styles.iconTextContainer}>
          <Icon
            name="home"
            size={32}
            color={activeTab === 'home' ? '#1877F2' : '#555'}
            style={styles.iconStyle}
          />
          <View style={styles.textView}>
            <Text style={activeTab === 'home' ? styles.activeTab : styles.tab}>
              Home
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabSelect('explore')}>
        <View style={styles.iconTextContainer}>
          <Icon
            name="compass"
            size={32}
            color={activeTab === 'explore' ? '#1877F2' : '#555'}
            style={styles.iconStyle}
          />
          <View style={styles.textView}>
            <Text
              style={activeTab === 'explore' ? styles.activeTab : styles.tab}>
              Explore
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabSelect('bookmark')}>
        <View style={styles.iconTextContainer}>
          <Icon
            name="bookmark"
            size={32}
            color={activeTab === 'bookmark' ? '#1877F2' : '#555'}
            style={styles.iconStyle}
          />

          <View style={styles.textView}>
            <Text
              style={activeTab === 'bookmark' ? styles.activeTab : styles.tab}>
              Bookmark
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => onTabSelect('profile')}>
        <View style={styles.iconTextContainer}>
          <Icon
            name="user"
            size={32}
            color={activeTab === 'profile' ? '#1877F2' : '#555'}
            style={styles.iconStyle}
          />

          <View style={styles.textView}>
            <Text
              style={activeTab === 'profile' ? styles.activeTab : styles.tab}>
              Profile
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: 1,

    height: 60,
  },
  tabContainer: {
    flex: 1, // To make sure each tab takes up equal space
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  iconTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconStyle: {
    marginBottom: 1, // Adjust this to fine-tune the vertical spacing between the icon and text
    alignSelf: 'center', // Ensure icon is centered horizontally within its parent
  },
  tab: {
    fontSize: 12,
    color: '#AAA',
  },
  activeTab: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1877F2',
  },
};
export default BottomNav;
