import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const NEWS_API_URL_BASE =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=4a7039fbb690407d90bf492a4731acf1';

async function fetchNews(category) {
  const lowercaseCategory = category.toLowerCase();
  const url = `${NEWS_API_URL_BASE}&category=${lowercaseCategory}`;
  console.log(`[NewsList] Fetching news for category: ${category}`);

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching the news:", error);
    return [];
  }
}

function removeDuplicateArticles(articles) {
  const seenUrls = new Set();
  return articles.filter(article => {
    if (seenUrls.has(article.url)) {
      return false;
    } else {
      seenUrls.add(article.url);
      return true;
    }
  });
}

const NewsList = ({ category}) => {
  const [newsData, setNewsData] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    (async () => {
      const fetchedNews = await fetchNews(category);
      const uniqueNews = removeDuplicateArticles(fetchedNews);
      setNewsData(uniqueNews);
    })();
  }, [category]);
  const handleNewsPress = (newsItem) => { // <-- This function
    navigation.navigate('NewsDetail', { newsItem });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleNewsPress(item)}> 
      <View style={newsItemStyles.container}>
        <Image
          source={
            item.urlToImage
              ? { uri: item.urlToImage }
              : require('../media/img/NewsImages.png')
          }
          style={newsItemStyles.image}
          resizeMode="cover"
        />
        <View style={{ flex: 1 , flexDirection:'column'}}>
          <Text numberOfLines={2} style={newsItemStyles.title}>{item.title}</Text>
          <Text style={newsItemStyles.summary}>{item.publishedAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={item => `${item.url}-${item.publishedAt}`}
      style={{ flex: 1 }}
    />
  );
};

const newsItemStyles = {
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E1',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    color: '#4E4B66',
    marginBottom: 8,
  },
  summary: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    color: '#7E7C9A',
    
  },
};

export default NewsList;
