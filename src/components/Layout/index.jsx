import { StyleSheet, View } from "react-native";

export const Layout = ({ children }) => {
  return <View style={styles.view}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {},
});
