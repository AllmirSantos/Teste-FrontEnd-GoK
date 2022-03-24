import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const {width} = Dimensions.get('window');

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Login({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.Container}>
        <View style={styles.BoxImg}>
          <Image
            style={styles.Img}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/fa63/df0c/66c408cdb9ec69577258ecd5ec435ae2?Expires=1648425600&Signature=Z7G61aUiJy-M0z48CMjeh9WVWd0zSwTBubcCg4Cs~9lkENvlpZQ0SwCNetxu5X1SEEMc41qINblRDxECgUXawartf1xatRLXffFZdFqXupv2V6S4ak~poCVMJlfo7beMMUhI-3VTBZzANkQOoLDKKyfJS8ZQjPt3POX0B1-yg8I2zwTCR~Z1frd6JIVZcVgZCNTa~YFvxemxgT1djpp3gV9nHyvQojWD32EmmKVi8wdvNxz-KwISgZDz26rlWxpC6Kqj5pzPbDvwWQM15GjXFVKCfWFaJwimUDl5k~8Lid9XtBtnnOBu~BnxnkgzENM3eIO9YuEoaHA0IRm5I8LgbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
          />
        </View>
        <View style={styles.BoxInfor}>
          <View style={styles.BoxText}>
            <Text style={styles.TextH1}>Buscar de usuário</Text>
            <Text style={styles.TextH4}>
              Crie sua conta através do seu usuário do GitHub
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.placeholderContainer}>
              <TextInput style={styles.TextInputNome} placeholder="@username" />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Principal')}
            style={styles.BtnCadastrar}>
            <Text style={styles.BtnCadastrarText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    top: 0,
    padding: 0,
    alignItems: 'center',
    width: width,
    justifyContent: 'center',
  },
  container: {
    padding: 0,
    display: 'flex',
    backgroundColor: '#fff',
    flex: 1,
  },
  BoxInfor: {
    display: 'flex',
    flex: 2.2,
    width: '80%',
    alignItems: 'center',
  },
  BoxImg: {
    width: width,
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  Img: {
    width: 170,
    height: 60,
  },
  inputContainer: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    borderColor: '#999',
    marginBottom: 25,
  },
  TextInputNome: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  placeholderContainer: {
    justifyContent: 'center',
  },
  placeholder: {
    fontSize: 15,
    position: 'absolute',
    marginLeft: 25,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    top: 11,
    color: '#999',
  },
  BoxText: {
    textAlign: 'left',
    width: '100%',
    paddingBottom: 20,
  },
  TextH1: {
    fontSize: 25,
    color: '#000',
    paddingBottom: 10,
  },
  TextH4: {
    fontSize: 17,
    paddingBottom: 10,
  },
  BtnCadastrar: {
    backgroundColor: '#000',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    paddingVertical: 12,
    borderRadius: 50,
    elevation: 5,
  },
  BtnCadastrarText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});
