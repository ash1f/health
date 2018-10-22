import { Assets, Font } from "expo";

export const LoadFonts = () => {
  Font.loadAsync({
    "nexa" : require("./../assets/fonts/NexaLight.otf"),
    "nexa-bold": require("./../assets/fonts/NexaBold.otf")
  });
};
