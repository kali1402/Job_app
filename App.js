import React, { useEffect } from 'react';
import Routes from './Routes';
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
    };
    loadFont().then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <Routes />
  );
}