import React, {useRef} from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const headerHeight = 120;
let scrollValue = 0;
let headerVisible = true;
let focused = false;
export default function HeaderSearch() {
  const animation = useRef(new Animated.Value(1)).current;
  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, headerHeight / 2 - 2],
  });
  const inputTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [headerHeight / 5, 0],
  });
  const opacity = animation;
  const onScroll = e => {
    if (focused) return;
    const y = e.nativeEvent.contentOffset.y;
    if (y > scrollValue && headerVisible && y > headerHeight / 2) {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = false;
    }
    if (y < scrollValue && !headerVisible) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
      headerVisible = true;
    }
    scrollValue = y;
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: headerHeight}}
        onScroll={onScroll}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(x => (
          <View style={styles.item} key={x}>
            <View style={styles.BoxInfor}>
              <View style={styles.BoxImgPerfil}>
                <Image
                  style={styles.ImgPerfil}
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/b504/e1f4/6aa201237efb22279d324d265779a511?Expires=1648425600&Signature=aC-l1fqQ5BTe65wuCWpfmiNBnolkT2Tn0DPfWrgzWyoeRIXF28zXsrybT181TLahqXcaq4Qr8fDyVG~djDcSb4iKHEGvlWR8NuPwaouRwiJX0i0L96H6U3fn9z6bPiaHETPj3LSAGJDogsxt1ONGKFGqiDFj2sRTaiY7e~Qi3cSSnsa8BUJOZYrHnI6D3pI-4BdjzZFUchmkn0HZpXKlwPoHmxzpGJwufO2JVCJPxC~yx3ndOosuNKo0ZHq148SK-qZYMGqX94lQcFMjTgAqPZQ6gSOialTwalOq9IWb-g2DN5K9dHQLnrWrw64l1Tfn~YwL~oYcV8p339Kpai3mTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
              </View>
              <View style={styles.BoxName}>
                <View style={styles.BoxNamePrincipal}>
                  <Text style={styles.TextName}>John Doe Santos</Text>

                  <View style={styles.BoxImgArrow}>
                    <Image
                      style={styles.ImgArrow}
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/271/271228.png',
                      }}
                    />
                  </View>
                  <View style={styles.BoxImgTrash}>
                    <TouchableOpacity style={styles.BtnBoxImgTrash}>
                      <Image
                        style={styles.ImgTrash}
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/565/565491.png',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.TextNameTwo}>@johndoesantos</Text>
              </View>
            </View>

            <View style={styles.BoxInforBottom}>
              <View style={styles.BoxImgBottom}>
                <Image
                  style={styles.ImgBottom}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/565/565491.png',
                  }}
                />
              </View>
              <Text style={styles.TextBottom}>GO.K Digital</Text>
              <View style={styles.BoxImgBottom}>
                <Image
                  style={styles.ImgBottom}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/565/565491.png',
                  }}
                />
              </View>
              <Text style={styles.TextBottom}>São Paulo, Brazil</Text>
              <View style={styles.BoxImgBottom}>
                <Image
                  style={styles.ImgBottom}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/565/565491.png',
                  }}
                />
              </View>
              <Text style={styles.TextBottom}>10</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={[styles.header]}>
        <Animated.View
          style={[styles.searchContainer, {transform: [{translateY}]}]}>
          <Animated.View
            style={[
              styles.inputContainer,
              {opacity, transform: [{translateY: inputTranslateY}]},
            ]}>
            <TextInput
              style={styles.input}
              placeholder="Buscar um repositorio"
              onFocus={() => (focused = true)}
              onBlur={() => (focused = false)}
            />
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.firstContainer]}>
          <View style={styles.BoxImgArrowHeader}>
            <Image
              style={styles.ImgArrowHeader}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png',
              }}
            />
          </View>
          <View style={styles.BoxImgArrowPerfil}>
            <Image
              style={styles.ImgArrowPerfil}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/b504/e1f4/6aa201237efb22279d324d265779a511?Expires=1648425600&Signature=aC-l1fqQ5BTe65wuCWpfmiNBnolkT2Tn0DPfWrgzWyoeRIXF28zXsrybT181TLahqXcaq4Qr8fDyVG~djDcSb4iKHEGvlWR8NuPwaouRwiJX0i0L96H6U3fn9z6bPiaHETPj3LSAGJDogsxt1ONGKFGqiDFj2sRTaiY7e~Qi3cSSnsa8BUJOZYrHnI6D3pI-4BdjzZFUchmkn0HZpXKlwPoHmxzpGJwufO2JVCJPxC~yx3ndOosuNKo0ZHq148SK-qZYMGqX94lQcFMjTgAqPZQ6gSOialTwalOq9IWb-g2DN5K9dHQLnrWrw64l1Tfn~YwL~oYcV8p339Kpai3mTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
              }}
            />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BoxImgArrowHeader: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  ImgArrowHeader: {
    width: 23,
    height: 23,
  },
  BoxImgArrowPerfil: {
    backgroundColor: 'red',
    height: 35,
    display: 'flex',
    width: 35,
    borderRadius: 50,
  },
  ImgArrowPerfil: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  header: {
    height: headerHeight / 1.6,
    width: '100%',
    position: 'absolute',
  },
  firstContainer: {
    height: headerHeight / 2,
    backgroundColor: '#fff',
    elevation: 2,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchContainer: {
    height: headerHeight / 2.3,
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 15,
    fontSize: 15,
  },

  item: {
    width: '90%',
    marginVertical: 5,
    elevation: 1,
    marginLeft: '5%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },

  BoxInfor: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  BoxInforBottom: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  BoxImgBottom: {
    height: 13,
    width: 13,
    marginRight: 5,
  },
  ImgBottom: {
    height: 12,
    width: 12,
  },
  TextBottom: {
    fontSize: 12,
    color: '#606060',
    marginRight: 10,
  },
  BoxImgArrow: {
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgArrow: {
    width: 12,
    height: 12,
    marginHorizontal: 10,
  },
  BoxImgTrash: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    marginRight: 0,
    height: 25,
  },
  ImgTrash: {
    width: 15,
    height: 15,
  },
  BtnBoxImgTrash: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 20,
  },
  BoxName: {
    flex: 3,
  },
  BoxImgPerfil: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  ImgPerfil: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  BoxNamePrincipal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextName: {
    fontSize: 19,
    paddingBottom: 5,
    paddingLeft: 10,
    color: '#000',
  },
  TextNameTwo: {
    fontSize: 13,
    color: '#000',
    paddingLeft: 10,
  },
});
