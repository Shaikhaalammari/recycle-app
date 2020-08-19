import React, { useState } from "react";
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    authStore.signin(user);
    if (authStore.user) navigation.replace("Home");
  };
  return (
    <AuthContainer>
      <AuthTitle>Sign in</AuthTitle>
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, username: value })} // ican clean this bs i wont
        placeholder="Username"
        placeholderTextColor="#f09ae9"
      />
      <AuthTextInput
        onChangeText={(value) => setUser({ ...user, password: value })}
        placeholder="Password"
        placeholderTextColor="#f09ae9"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in </AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Signup")}>
        Don't Have An Account ? Sing Up!
      </AuthOther>
    </AuthContainer>
  );
};

export default Signin;
