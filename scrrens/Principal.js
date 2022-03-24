import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Principal({navigation}) {
  return (
    <View>
      <View style={styles.Header}>
        <View style={styles.HeaderBoxImg}>
          <Image
            style={styles.HeaderImg}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/fa63/df0c/66c408cdb9ec69577258ecd5ec435ae2?Expires=1648425600&Signature=Z7G61aUiJy-M0z48CMjeh9WVWd0zSwTBubcCg4Cs~9lkENvlpZQ0SwCNetxu5X1SEEMc41qINblRDxECgUXawartf1xatRLXffFZdFqXupv2V6S4ak~poCVMJlfo7beMMUhI-3VTBZzANkQOoLDKKyfJS8ZQjPt3POX0B1-yg8I2zwTCR~Z1frd6JIVZcVgZCNTa~YFvxemxgT1djpp3gV9nHyvQojWD32EmmKVi8wdvNxz-KwISgZDz26rlWxpC6Kqj5pzPbDvwWQM15GjXFVKCfWFaJwimUDl5k~8Lid9XtBtnnOBu~BnxnkgzENM3eIO9YuEoaHA0IRm5I8LgbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Page2')}
          style={styles.HeaderBtnAdicionar}>
          <Text style={styles.HEaderBtnAdicionarText}>Adicionar novo</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollViewBox}>
        {data.map((item, i) => (
          <Animatable.View
            key={item}
            style={styles.item}
            animation="fadeInUp"
            delay={i * 100}
            useNativeDriver>
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
          </Animatable.View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ScrollViewBox: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#E5E5E5',
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

  HeaderBoxImg: {
    flex: 1,
    paddingHorizontal: 10,
    display: 'flex',
  },
  Header: {
    height: 60,
    width: '100%',
    elevation: 2,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  HeaderImg: {
    width: 95,
    height: 40,
  },
  HeaderBtnAdicionar: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: 'flex',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    elevation: 5,
  },
  HEaderBtnAdicionarText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});
