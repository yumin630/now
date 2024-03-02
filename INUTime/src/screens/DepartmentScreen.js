import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
//반응형 디자인
import { SimpleLineIcons } from '@expo/vector-icons';

//학과 게시판 구현

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DepartmemtScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.subTitle}>내 학과</Text>
      <View style={styles.body}>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
          }}
        >
          <View style={{ marginTop: 10 }}>
            <SimpleLineIcons name="arrow-right" size={18} color="black" />
          </View>
          <Button
            style={styles.btnContent}
            title="정보기술대학"
            color="black"
          ></Button>
        </View>
        <View
          style={{
            marginLeft: 10,
            flexDirection: 'row',
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 20 }}>
            <SimpleLineIcons name="arrow-right" size={18} color="black" />
          </View>
          <Button
            style={styles.btnContent}
            title="컴퓨터공학부"
            color="black"
          ></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //배경
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    //모서리 둥근 사각형 테두리 만들기
    marginTop: 10,
    borderWidth: 2,
    width: SCREEN_WIDTH - 40,
    borderRadius: 20,
    borderColor: '#ABABAB',
    alignSelf: 'center',
  },
  subTitle: {
    //"내 학과"
    fontSize: 25,
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  btnContent: {
    //"정보기술대학", "컴퓨터공학부"
    fontSize: 20,
  },
});

export default DepartmemtScreen;
