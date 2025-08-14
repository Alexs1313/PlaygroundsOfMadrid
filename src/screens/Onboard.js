import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import AppBackground from '../components/AppBackground';
import { onboard } from '../data/onboard';
import MediumButton from '../components/MediumButton';

const { height } = Dimensions.get('window');

const Onboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1000);
  }, []);

  const handleNextSlide = () => {
    currentIndex === 2
      ? navigation.replace('Home')
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <AppBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        {showLogo ? (
          <View style={styles.logoWrap}>
            <Image source={require('../assets/images/logo.png')} />
          </View>
        ) : (
          <View
            style={[styles.container, currentIndex !== 0 && { paddingTop: 0 }]}
          >
            <Image
              source={onboard[currentIndex].image}
              style={[styles.image, currentIndex !== 0 && { marginTop: 0 }]}
            />
            <Image source={onboard[currentIndex].title} style={styles.title} />
            <Text style={styles.description}>
              {onboard[currentIndex].description}
            </Text>

            <MediumButton
              title={onboard[currentIndex].button}
              onPress={handleNextSlide}
            />
          </View>
        )}
      </ScrollView>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 36 },
  image: { marginTop: height * 0.05 },
  title: { marginTop: 30 },
  description: {
    fontWeight: '400',
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 21,
  },
  logoWrap: { alignItems: 'center', paddingTop: height * 0.19 },
});

export default Onboard;
