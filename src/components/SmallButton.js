import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SmallButton = ({ onPress, image, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <LinearGradient
        colors={['#FFD044', '#FEDB7F', '#F0B525', '#F1B005', '#FECF43']}
        style={[styles.button, style]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0 }}
      >
        <Image source={image} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 49,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default SmallButton;
