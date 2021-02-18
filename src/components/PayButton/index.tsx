import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../../styles/colors";

import { Button, Label } from "./styles";

interface PayButtonProps {
  onPress: () => void;
  focused: boolean;
}

const PayButton: React.FC<PayButtonProps> = ({ onPress, focused }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? [colors.white, colors.grey]
            : [colors.springGreen, colors.pigmentGreen]
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? colors.black : colors.white}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
