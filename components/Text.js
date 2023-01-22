import React from "react";
import { Text } from "react-native";

function AppText({ content, style }) {
  return (
    <Text style={[style]}>
      {content}
    </Text>
  );
}
export default AppText;