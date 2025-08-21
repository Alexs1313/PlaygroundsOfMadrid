import { View } from 'react-native';

const AppBackground = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(7, 4, 25)' }}>
      {children}
    </View>
  );
};

export default AppBackground;
