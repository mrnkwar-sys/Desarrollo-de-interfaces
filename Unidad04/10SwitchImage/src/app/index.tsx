import { useState } from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ImageOption = 1 | 2 | 3 | 4;

const imageOptions = [
  { id: 1, label: "Rilakkuma" },
  { id: 2, label: "Korilakkuma" },
  { id: 3, label: "Kiiroitori" },
  { id: 4, label: "Charoikoguma" },
] as const;

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<ImageOption>(1);

  let imageSource;
  let backgroundColor;
  let imageLabel;

  switch (selectedImage) {
    case 1:
      imageSource = require("../../assets/images/Rilakkuma-PNG-HD-Image-thumb-removebg-preview.png");
      backgroundColor = "#b39471";
      imageLabel = "Rilakkuma";
      break;
    case 2:
      imageSource = require("../../assets/images/korilakkuma-removebg-preview (1).png");
      backgroundColor = "#ffe7f1";
      imageLabel = "Korilakkuma";
      break;
    case 3:
      imageSource = require("../../assets/images/kiiroitori-removebg-preview.png");
      backgroundColor = "#62523B";
      imageLabel = "Kiiroitori";
      break;
    case 4:
      imageSource = require("../../assets/images/chairoikoguma-removebg-preview.png");
      backgroundColor = "#78463D";
      imageLabel = "Charoikoguma";
      break;
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>GALERIA INTERACTIVA</Text>
        <Text style={styles.title}>Elige una imagen</Text>
      </View>

      <View style={styles.imageFrame}>
        <Image
          source={imageSource}
          contentFit="contain"
          accessibilityLabel={imageLabel}
          style={styles.image}
        />
      </View>

      <View style={styles.buttons}>
        {imageOptions.map((option) => {
          const isSelected = selectedImage === option.id;

          return (
            <Pressable
              key={option.id}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              onPress={() => setSelectedImage(option.id)}
              style={({ pressed }) => [
                styles.button,
                isSelected && styles.selectedButton,
                pressed && styles.pressedButton,
              ]}
            >
              <Text
                style={[
                  styles.buttonLabel,
                  isSelected && styles.selectedButtonLabel,
                ]}
              >
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 36,
    justifyContent: "space-between",
  },
  heading: {
    gap: 8,
  },
  eyebrow: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
  imageFrame: {
    width: "100%",
    height: 280,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  button: {
    flexBasis: "40%",
    flexGrow: 1,
    minHeight: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.14)",
  },
  selectedButton: {
    backgroundColor: "#FFFFFF",
  },
  pressedButton: {
    opacity: 0.75,
  },
  buttonLabel: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  selectedButtonLabel: {
    color: "#18252A",
  },
});
