import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ScrapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrapScreen</Text>
    </View>
  );
};

ScrapScreen.propTypes = {
  //PropTypes
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ScrapScreen;
