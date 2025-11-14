## Tasks

### 0. Navigation using Stack Navigation Patterns

**mandatory**

**Objectives**:

This task is designed to enhance skills in developing mobile user interfaces and implementing navigation patterns using React Native. You will build a multi-screen mobile application with seamless navigation, following the Stack Navigation pattern.

[![Watch the video](https://www.youtube.com/watch?v=wsouAlZeOOQ)](https://www.youtube.com/watch?v=wsouAlZeOOQ)

#### Instructions:

**Step 1: Set Up Your Project**

- Create a new expo app in the directory prodev-mobile-app-0x04 using the following command:

  ```bash
  npx create-expo-app@latest prodev-mobile-app-0x04
  ```

- Navigate into the project directory:

  ```bash
  cd prodev-mobile-app-0x04
  ```

- Reset the project using:

  ```bash
  npm run reset-project
  ```

Unzip the required assets [from here](./1dc4f8a4ec32ac1f01ce14afa6e26e58bb4064c2%20(1).zip) -- (Task_0_Required_Assets zip file) and place them in the `assets/images` directory inside your project.

**Step 2:**

- From your app directory, create the following files

  - index.tsx
  - join.tsx
  - Sign.tsx

- It is important to separate our styling from our screen, to maintain a cleaner codebase. Create the following files under the root directory

  - `constants/index.ts`
  - `styles/_mainstyle.ts`
  - `styles/_joinstyle.ts`

- Replace the content of `constants/index.ts` with the following

```typescript
const BACKGROUNDIMAGE = require('@/assets/images/hero-icon.png')
const HEROLOGO = require('@/assets/images/Logo.png')
const HEROLOGOGREEN = require("@/assets/images/logo-green.png")
const GOOGLELOGO = require('@/assets/images/google.png')
const FACEBOOKLOGO = require('@/assets/images/facebook.png')

export { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO }
```

Replace the content of `styles/_mainstyle.ts` with the following

```typescript
import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
});

export { styles };
```

- Replace the content of `styles/_joinstyle.ts` with the following

```typescript
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  iconsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  titleTextGroup: {
    marginTop: 20
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: '#7E7B7B'
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: '#7B7B7B',
    marginBottom: 7
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordControl: {
    flex: 1
  },
  primaryButton: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 300
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupgroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 77, 
    right: 76,
    bottom: 33
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: 400
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#FFA800'
  },
  dividerGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: '#e6e6e6'
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ['small-caps'],
    color: '#C2C2C2'
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#34967C',
    marginTop: 9,
  }
});

export { styles }
```

**Step 3:**

- Setting up your screens. Note that we have already worked on the following screen from our previous tasks.

  - index.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x02)
  - signin.tsx (Move the contents from the following repository prodev-mobile-app/ prodev-mobile-app-0x03)
  - Join.tsx : Notice the design for join now is similar to that of the sign in? Make the necessary changes to reflect the view.

**Step 4:**

- Setting up the Layout pattern help expo decide the Navigation pattern to be used. From your `app/_layout.tsx` replace the content with the following:

```typescript
import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}
```

**Step 5:**

- Start your application using the command:

```bash
npx expo start
```

- Scan the QR code on your terminal with your device (iOS or Android) and text.

**Repo**:

- **GitHub repository**: **prodev-mobile-app**
- **Directory**: **prodev-mobile-app-0x04**
- **File**: [app/index.tsx](./prodev-mobile-app-0x04/app/index.tsx), [app/join.tsx](./prodev-mobile-app-0x04/app/join.tsx), [app/signin.tsx](./prodev-mobile-app-0x04/app/signin.tsx), [styles/_mainstyle.ts](./prodev-mobile-app-0x04/styles/_mainstyle.ts), [styles/_join.ts](./prodev-mobile-app-0x04/styles/_join.ts), [constants/index.ts](./prodev-mobile-app-0x04/constants/index.ts), [app/_layout.tsx](./prodev-mobile-app-0x04/app/_layout.tsx), [app.json](./prodev-mobile-app-0x04/app.json), [assets/images/google.png](./prodev-mobile-app-0x04/assets/images/google.png), [assets/images/logo.png](./prodev-mobile-app-0x04/assets/images/logo.png), [assets/images/splash.png](./prodev-mobile-app-0x04/assets/images/splash.png), [assets/images/facebook.png](./prodev-mobile-app-0x04/assets/images/facebook.png)
