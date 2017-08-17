import React, { Component } from 'react';
import { Text, Image, Keyboard, ScrollView, View, AsyncStorage, TextInput } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, TextInputLayout } from '../common';
import { Actions } from 'react-native-router-flux';

class SignIn extends Component {
  constructor() {
    super();
      this.state = { uid: '', pass: '', valid: false };
    }

    onValidate() {
      var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailReg.test(this.state.uid)){
        this.setState({ valid: true })
      } else {
        Actions.SignUp()
      }
      console.log(!emailReg.test(this.state.uid), this.state.valid);
    }

    onUserChange(uid) {
      this.setState({uid, valid: false})
    }

    onPassChange(pass) {
      this.setState({ pass, valid: false})
    }

  renderError() {
    if (this.state.valid) {
      return (
        <CardSection style={{ marginTop: 10 }}>
          <Text style={{ color: 'red', fontSize: 15 }}>invalid Username or Password</Text>
        </CardSection>
    );
    }
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps='always'
        >
        <Text style={[styles.appTitleTextStyle]}>Login</Text>
        <Card style={{ marginTop: 15 }}>
          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'Username'}
                  onChangeText={(uid) => this.onUserChange(uid)}
                  value={this.state.uid}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 5 }}>
            <TextInputLayout
              style={styles.inputLayout}
            >
              <TextInput
                  style={styles.textInput}
                  placeholder={'Password'}
                  secureTextEntry
                  onChangeText={(pass) => this.onPassChange(pass)}
                  value={this.state.pass}
              />
            </TextInputLayout>
         </CardSection>
          {this.renderError()}
         <CardSection style={{ marginTop: 40 }}>
           <Button
             style={styles.buttonStyle}
             buttonTextStyle={styles.buttonTextStyle}
             onPress={() => this.onValidate()}>
             LOGIN
           </Button>
         </CardSection>

        </Card>
      </ScrollView>
      );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    color: '#EB262C'
  },
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kulizaLogoStyle: {
    flex: 1,
    width: null,
    height: 55,
    marginTop: 45,
    padding: 10,
    resizeMode: 'contain',
    // marginTop: 15
  },
  appTitleTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2e2a26',
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    height: 40,
  },
  inputLayout: {
    flex: 1,
      // marginTop: 16,
      // marginHorizontal: 36
  },
  buttonStyle: {
    justifyContent: 'center',
    borderColor: '#F8B018',
  },
  buttonTextStyle: {
    textAlign: 'center',
  }
};

export default SignIn;
