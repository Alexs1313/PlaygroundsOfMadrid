import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';

import AppBackground from '../components/AppBackground';
import { onboard } from '../data/onboard';
import MediumButton from '../components/MediumButton';

const { height } = Dimensions.get('window');

const Onboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(false);
    }, 1000);
  }, []);

  const handleNextSlide = () => {
    setCurrentIndex(currentIndex + 1);
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
            <Text style={styles.title}>{onboard[currentIndex].title}</Text>
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
  title: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFD044',
    textAlign: 'center',
    marginTop: 21,
  },
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
