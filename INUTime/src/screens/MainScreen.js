import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
//헤더랑 하단탭 구현
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

//아래 내용 설치
//npm install @react-navigation/native
//npx expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
//npm install @react-navigation/bottom-tabs

const HomeScreen = () => {
  const navigation = useNavigation();
  //main 화면, 네비게이션 구현
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          //main 화면 개인정보 부분
          flex: 0.2,
          backgroundColor: '#D9D9D9',
          flexDirection: 'colum',
          justifyContent: 'space-around',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          컴퓨터공학부 202300000
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            color: '#868383',
          }}
        >
          이름
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            color: '#868383',
          }}
        >
          닉네임
        </Text>
      </View>
      <TouchableWithoutFeedback //학과 게시판 가는 버튼
        onPress={() => navigation.navigate('Depart')}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>학과</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback //수업 게시판 가는 버튼
        onPress={() => {}}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>수업</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback //공동구매 게시판 가는 버튼
        onPress={() => {}}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>공동구매</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback //스터디 게시판 가는 버튼
        onPress={() => {}}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>스터디</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback //랜덤매칭 게시판 가는 버튼
        onPress={() => {}}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>랜덤매칭</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback //모두의 공간 게시판 가는 버튼
        onPress={() => {}}
      >
        <View style={styles.bodyContent}>
          <Text style={styles.bodyText}>모두의 공간</Text>
          <SimpleLineIcons
            name="arrow-right"
            size={18}
            color="black"
            style={{ marginRight: 20 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContent: {
    //각 게시판 가는 버튼 틀
    flex: 0.1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#D1D1D6',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyText: {
    //각 게시판 가는 버튼 글자
    fontSize: 15,
    marginLeft: 20,
  },
});

export default HomeScreen;
