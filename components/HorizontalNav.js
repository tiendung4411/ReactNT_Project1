import React, { useRef, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

const HorizontalNav = ({ items, activeItem, onItemPress }) => {
  const navRef = useRef(null);
  const activeLinkRef = useRef(null);
  const handlePress = (item) => {
    console.log(`[HorizontalNav] Category Pressed: ${item}`);
    if(item === "All"){
      item = "general";
    }
    onItemPress(item);
  };


  useEffect(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.measure((fx, fy, width) => {
        navRef.current.scrollTo({ x: fx - (width / 2), animated: true });
      });
    }
  }, []);

  return (
    <View style={{ height: 50 }}>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    ref={navRef}
    style={styles.nav}
    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      {items.map((link) => (
       <TouchableOpacity
       key={link}
       onPress={() => handlePress(link)}
     >
       <Text
         ref={link === activeItem ? activeLinkRef : null}
         style={link === activeItem ? styles.activeLink : styles.link}
       >
         {link}
       </Text>
     </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = {
  nav: {
    height: 0,
  
  },
  link: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#4E4B66',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  activeLink: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#1877F2',
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.12,
    textAlign: 'center'
  },
};

export default HorizontalNav;
