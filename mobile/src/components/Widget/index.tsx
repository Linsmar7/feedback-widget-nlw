import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";

import { styles } from "./styles";
import { theme } from "../../theme";

export function Widget() {
  return (
    <>
      <TouchableOpacity>
        <Text>oisadsdass</Text>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>
    </>
  );
}
