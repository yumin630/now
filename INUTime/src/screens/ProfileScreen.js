import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { signOut } from '../api/auth';
import { useUserState } from '../contexts/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, WHITE } from '../colors';
import FastImage from '../components/FastImage';
import { useState } from 'react';
import DangerAlert, { AlertTypes } from '../components/DangerAlert';
import { useNavigation } from '@react-navigation/native';
import { SettingRoutes } from '../navigations/routes';

const ProfileScreen = () => {
  const [user, setUser] = useUserState();
  const { top } = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <DangerAlert
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={async () => {
          await signOut();
          setUser({});
        }}
        alertType={AlertTypes.SIGNOUT}
      />
      <View style={styles.settingButton}>
        <Pressable
          onPress={() => {
            setVisible(true);
          }}
          hitSlop={10}
        >
          <MaterialCommunityIcons
            name="logout-variant"
            size={24}
            color={GRAY.DEFAULT}
          />
        </Pressable>
      </View>

      <View style={styles.profile}>
        <View
          style={[
            styles.photo,
            user.photoURL || { backgroundColor: GRAY.DEFAULT },
          ]}
        >
          <FastImage source={{ uri: user.photoURL }} style={styles.photo} />

          <Pressable style={styles.editButton} onPress={() => {}}>
            <MaterialCommunityIcons name="pencil" size={20} color={WHITE} />
          </Pressable>
        </View>

        <View>
          <Text style={styles.nickname}>{'이름: '}</Text>
          <Text style={styles.nickname}>
            {'닉네임: '}
            {user.displayName || 'nickname'}
          </Text>
          <Text style={styles.info}>{'학번: '}</Text>
          <Text style={styles.info}>{'힉과: '}</Text>
          <Text style={styles.info}>{'성별: '}</Text>
        </View>
      </View>

      <Text style={[styles.text, { padding: 5 }]}>{'내 활동'}</Text>

      <View style={styles.myActivity}>
        <Pressable onPress={() => navigation.navigate(SettingRoutes.WRITED)}>
          <View style={styles.myActElement}></View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate(SettingRoutes.COMMENT)}>
          <View style={styles.myActElement}></View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate(SettingRoutes.SCRAP)}>
          <View style={styles.myActElement}></View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate(SettingRoutes.SCORE)}>
          <View style={styles.myActElement}></View>
        </Pressable>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.text, { marginLeft: -5 }]}>내가 쓴 글</Text>
        <Text style={[styles.text, { marginLeft: -15 }]}>댓글 단 글</Text>
        <Text style={[styles.text, { marginLeft: -5 }]}>스크랩</Text>
        <Text style={[styles.text, { marginLeft: 5 }]}>내 평점</Text>
      </View>

      <View style={styles.account}>
        <Text style={styles.text}>계정</Text>
      </View>

      <View style={styles.accountContainer}>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            비밀번호 변경
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            학과 인증
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            푸시 알림 설정
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            이메일 변경
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            계정 관리
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            검정 태마
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            미정
          </Text>
        </View>
        <View style={styles.accountElement}>
          <View style={[styles.accountCircle]} />
          <Text style={[styles.text, { marginTop: 15, marginLeft: 10 }]}>
            미정
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  settingButton: {
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.7,
    borderBottomColor: GRAY.DARK,
    paddingVertical: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 5,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: GRAY.DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 20,
  },
  info: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 20,
    opacity: 0.4,
  },
  myActivity: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  myActElement: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: GRAY.DEFAULT,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY.DEFAULT,
    width: '100%',
    height: '5%',
  },
  accountContainer: {
    flex: 1,
  },
  accountElement: {
    width: '100%',
    height: '12.5%',
    borderBottomWidth: 0.7,
    borderBottomColor: GRAY.DARK,
    flexDirection: 'row',
  },
  accountCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: GRAY.DEFAULT,
  },
});

export default ProfileScreen;
