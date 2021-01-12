import NetInfo from "@react-native-community/netinfo";

export const checkConnected = () => {
  // alert('check connected')
  return NetInfo.fetch().then(state => {
      return state.isConnected
    });
}