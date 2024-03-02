import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const ScoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScoreScreen</Text>
    </View>
  );
};

ScoreScreen.propTypes = {
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

export default ScoreScreen;
