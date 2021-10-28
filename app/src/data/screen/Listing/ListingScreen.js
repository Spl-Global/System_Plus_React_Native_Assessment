import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import AppHeader from '../../../design/components/Header/AppHeader';
import {Appcolors, Appfonts} from '../../../design/constants';
import UrlService from '../../Services/UrlService';
import AppTextInput from '../TextInput/AppTextInput';
import styles from './styles';

const ListingScreen = () => {
  const [data, setData] = useState([]);
  const [uniName, setUniversityName] = useState('Marywood University');
  const [countryName, setCountryName] = useState('United States');
  const [error, seterror] = useState('');
  const [loading, setlaoding] = useState(false);
  const search = () => {
    setlaoding(true);
    setData([]);
    UrlService.get(`search?country=${countryName}&name=${uniName}`)
      .then(response => {
        const responseData = [];
        const res = response.data;
        for (const key in res) {
          responseData.push({
            id: key,
            country: res[key].country,
            domains: res[key].domains,
            name: res[key].name,
            web_pages: res[key].web_pages,
          });
        }
        setData(responseData);
        setlaoding(false);
      })
      .catch(err => {
        seterror(err);
        console.log(err);
        setlaoding(false);
      });
  };
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator
          size="large"
          color={Appcolors.PRIMARY}></ActivityIndicator>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'}></StatusBar>
      <AppHeader title="Listing"></AppHeader>
      <ScrollView
        style={styles.subcontainer}
        contentContainerStyle={{justifyContent: 'center'}}>
        <AppTextInput
          title="University Name"
          placeholder="University Name"
          value={uniName}
          setvalue={val => {
            setUniversityName(val);
          }}></AppTextInput>
        <AppTextInput
          title="Country Name"
          placeholder="Country Name"
          value={countryName}
          setvalue={val => {
            setCountryName(val);
          }}></AppTextInput>
        <TouchableOpacity
          style={{
            backgroundColor: Appcolors.PRIMARY,
            alignSelf: 'center',
            borderRadius: 100,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            search();
          }}>
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 10,
              paddingHorizontal: 30,
              color: Appcolors.WHITE,
              fontFamily: Appfonts.BOLD,
            }}>
            Search
          </Text>
        </TouchableOpacity>
        {data.length === 0 ? (
          <View style={styles.cardStyle}>
            <View style={styles.exptyContainer}>
              <Text style={styles.textStyle}>Empty</Text>
            </View>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={itemData => {
                return (
                  <View style={styles.cardStyle}>
                    <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
                      <Text style={styles.textStyle}>Country Name:</Text>
                      <Text style={styles.simpleTxt}>
                        {itemData.item.country} {'\n'}
                      </Text>
                      <Text style={styles.textStyle}>University Name:</Text>
                      <Text style={styles.simpleTxt}>
                        {itemData.item.name} {'\n'}
                      </Text>
                      <Text style={styles.textStyle}>Domains :</Text>
                      {itemData.item.domains.map(item => {
                        return <Text style={styles.simpleTxt}>{item}</Text>;
                      })}
                      <Text style={styles.textStyle}>{'\n'}Web Pages :</Text>

                      {itemData.item.web_pages.map(item => {
                        return <Text style={styles.simpleTxt}>{item}</Text>;
                      })}
                    </View>
                  </View>
                );
              }}></FlatList>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingScreen;
