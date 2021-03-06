import React from "react";
import { TouchableOpacity } from "react-native";
import { Props } from "../types";
import { colors } from "../color";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;      
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 13px 10px;
  margin-top: 20px;
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 10px;
  margin-top: 20px;
`;
export default function Welcome({ navigation }: Props<"Welcome">) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogIn = () => navigation.navigate("LogIn");
    return (
      <Container>
        <Logo resizeMode="center" source={require("../assets/logo.png")} />
          <CreateAccount  disabled={ false } onPress={goToCreateAccount}>
            <CreateAccountText>Create Account</CreateAccountText>
          </CreateAccount>
        <TouchableOpacity onPress={goToLogIn}>
          <LoginLink>Log In</LoginLink>
        </TouchableOpacity>
      </Container>
    );
}