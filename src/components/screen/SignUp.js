import React, { Component } from 'react';
import { Text, Image, ScrollView,
  View, KeyboardAvoidingView,
  TextInput,
Animated, Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardSection, Input, Button, Spinner, TextInputLayout } from '../common';

class Register extends Component {
  constructor() {
    super();
    this.state = { email: '', valid: false };
    }

    onEmailChange(email) {
      var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!emailReg.test(this.state.email)){
        this.setState({ email, valid: true })
      } else {
        this.setState({ valid: false })
      }
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
      const { appTitleTextStyle, inputLayout, textInput } = styles;
    return (
      // <KeyboardAvoidingView
      //   style={styles.container}
      //   behavior="position"
      // >
  //  <Animated.View style={[styles.container, { paddingBottom: this.keyboardHeight }]}>

    <KeyboardAwareScrollView
    style={{ flex: 1 }}
    resetScrollToCoords={{ x: 0, y: 0 }}
    contentContainerStyle={styles.container}
    scrollEnabled={true}
    >
        <Text style={[styles.appTitleTextStyle]}>Register</Text>
          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'FirstName'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'LastName'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'Email'}
                  onChangeText={(email) => this.onEmailChange(email)}
                  value={this.state.email}
              />
            </TextInputLayout>
          </CardSection>
          {this.renderError()}
          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'Mobile'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'Address'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 5 }}>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'City'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 5 }}>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'state'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 5 }}>
            <TextInputLayout
              style={styles.inputLayout}>
              <TextInput
                  style={styles.textInput}
                  placeholder={'PinCode'}
              />
            </TextInputLayout>
          </CardSection>

          <CardSection style={{ marginTop: 40 }}>
          <Button
            style={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            >
            SAVE
          </Button>
          </CardSection>

      </KeyboardAwareScrollView>
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
     backgroundColor: 'white',
      // justifyContent: 'center',
      // alignItems: 'center',
  },
  appTitleTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2e2a26',
    marginTop: 30,
  },
  textInput: {
  //  flex: 1,
    fontSize: 18,
    height: 40,
  },
  inputLayout: {
    flex: 1,
      // marginTop: 16,
       marginHorizontal: 36
  },
  buttonStyle: {
    justifyContent: 'center',
    borderColor: '#F8B018',
    marginHorizontal: 36,
  },
  buttonTextStyle: {
    textAlign: 'center',
  }
};

export default Register;

// <Card style={{ marginTop: 15, flex: 1 }}>
// </Card>
