# Installation

```sh
npm install domaincomponent
```

# Usage

# DomainTextInput Component

## Description
`DomainTextInput` is a customizable text input component that extends `TextInputProps` and `TextInputIOSProps`, providing additional styling and configuration options.

![image](https://github.com/user-attachments/assets/d5ab91ef-33b2-4c84-8199-c70f5ade06bc)
## Props

| Props              | Type                              | Required | Description                                               |
| ------------------ | -------------------------------- | -------- | --------------------------------------------------------- |
| `style`           | `StyleProp<ViewStyle>`           | ❌ No    | Styling for the view container.                          |
| `width`           | `number`                         | ❌ No    | Custom width for the input component.                    |
| `editable`        | `boolean`                        | ❌ No    | Determines if the input is editable.                     |
| `focusColor`      | `ColorValue`                     | ❌ No    | Color of the input when focused.                         |
| `name`            | `string`                         | ✅ Yes   | Name of the input field (used for form handling).        |
| `nextName`        | `string`                         | ❌ No    | Name of the next input field for navigation.             |
| `left`            | `ReactNode`                      | ❌ No    | Left-side component inside the input (e.g., icon).       |
| `leftWidth`       | `DimensionValue`                 | ❌ No    | Width of the left component.                             |
| `right`           | `ReactNode`                      | ❌ No    | Right-side component inside the input (e.g., icon).      |
| `rightWidth`      | `DimensionValue`                 | ❌ No    | Width of the right component.                            |
| `helperText`      | `string`                         | ❌ No    | Text displayed below the input for guidance.            |
| `helperTextColor` | `ColorValue`                     | ❌ No    | Color of the helper text.                                |
| `label`           | `string`                         | ❌ No    | Label text for the input.                                |
| `labelColor`      | `ColorValue`                     | ❌ No    | Color of the label text.                                 |
| `labelBackground` | `ColorValue`                     | ❌ No    | Background Color of the label text.                      |
| `inputColor`      | `ColorValue`                     | ❌ No    | Text color of the input field.                          |

## Example Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { DomainTextInput } from 'domaincomponent';

const App = () => {
  return (
    <View>
      <DomainTextInput
          label="User Name"
          labelColor='#000'
          labelBackground='#f0f0f0'
          name="username"
          nextName="password"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          left={
              <FontAwesome name='user' size={20} />
          }
      />
    </View>
  );
};

export default App;
```

# DomainSelect Component

## Description
`DomainSelect` is a customizable dropdown/select component that allows users to choose from a list of options. It supports labels, placeholders, and optional left/right icons.

![image](https://github.com/user-attachments/assets/f266158e-5bc2-4e52-ae95-4611f1b22f7f)

<img src="https://github.com/user-attachments/assets/96bc67c1-0e34-439f-be0b-0abf20ecaca9" style="width:300px; height:auto;">

## Props

| Props         | Type                            | Required | Description                                                 |
| ------------ | ------------------------------ | -------- | ----------------------------------------------------------- |
| `style`      | `StyleProp<ViewStyle>`         | ❌ No    | Styling for the select container.                          |
| `options`    | `Option[]`                     | ✅ Yes   | Array of selectable options.                               |
| `value`      | `string`                        | ❌ No    | Selected option's ID.                                      |
| `onChange`   | `(value: string \| undefined) => void` | ❌ No    | Callback function triggered when an option is selected.    |
| `placeholder`| `string`                        | ❌ No    | Placeholder text displayed when no option is selected.     |
| `label`      | `string`                        | ❌ No    | Label for the select input.                                |
| `resetButton`| `boolean`                       | ❌ No    | Displays a reset button to clear selection if `true`.     |
| `helperText`      | `string`                         | ❌ No    | Text displayed below the input for guidance.            |
| `helperTextColor` | `ColorValue`                     | ❌ No    | Color of the helper text.                                |

### **Option Object Structure**
Each option in the `options` array follows this structure:

```ts
export interface Option {
    id: string;         // Unique identifier for the option
    name: string;       // Display name of the option
    left?: ReactNode;   // (Optional) Left-side icon/component
    right?: ReactNode;  // (Optional) Right-side icon/component
}
```

## Example Usage

```tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import { DomainSelect } from 'domaincomponent';

const countryOptions = [
    {
        id: '1',
        name: 'Malaysia',
        left: <Text>MS</Text>,
        right: <FontAwesome name='flag' size={15} />
    },
    {
        id: '2',
        name: 'Singapore',
        left: <Text>SGD</Text>,
        right: <FontAwesome name='flag' size={15} />
    },
]

const App = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  return (
    <View>
     <DomainSelect
          options={countryOptions}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Select a country"
          label="Country"
          resetButton={true}
          helperText='Cannot empty'
      />
    </View>
  );
};

export default App;
```

# DomainMainContainer

## Description
`DomainMainContainer` is a reusable React Native component that serves as a container for wrapping application content. It provides optional keyboard avoiding behavior to enhance the user experience when dealing with text inputs. The component ensures a safe layout by utilizing `SafeAreaView` and conditionally wrapping children inside `KeyboardAvoidingView` when `keyboardAvoidingEnabled` is set to `true`.

## Props Table

| Props                   | Type                    | Required | Description                                                                 |
|-------------------------|------------------------|----------|-----------------------------------------------------------------------------|
| `children`              | `React.ReactNode`      | ✅ Yes   | The content to be rendered inside the container.                           |
| `keyboardAvoidingEnabled` | `boolean`            | ❌ No    | Enables `KeyboardAvoidingView` for handling keyboard interactions. Default is `false`. |

## Example Usage

```tsx
import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { DomainMainContainer } from 'domaincomponent';

const MyScreen: React.FC = () => {
  return (
     <DomainMainContainer keyboardAvoidingEnabled={true}>
      <View>
        <Text>Enter your details:</Text>
        <TextInput placeholder="Type here..." style={{ borderWidth: 1, padding: 10 }} />
        <Button title="Submit" onPress={() => console.log('Submitted')} />
      </View>
    </DomainMainContainer>
  );
};

export default MyScreen;
```

# DomainLoading

## Description
`DomainLoading` is a reusable React Native component that displays a loading indicator when the `loading` prop is set to `true`. If `loading` is `false`, the component renders nothing.

## Props Table

| Props    | Type     | Required | Description                                      |
|----------|---------|----------|--------------------------------------------------|
| `loading` | `boolean` | ✅ Yes   | Determines whether the loading indicator is displayed. |

## Example Usage

```tsx
import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { DomainLoading } from 'domaincomponent';

const MyScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Simulate loading for 3 seconds
  }, []);

  return (
    <View>
      <DomainLoading loading={loading} />
      <Button title="Reload" onPress={() => setLoading(true)} />
    </View>
  );
};

export default MyScreen;
```

# DomainModal

## Description
`DomainModal` is a customizable modal component for React Native applications. It provides various options such as backdrop control, hardware back press handling, custom styling, and optional header and footer components.

## Props Table

| Props                       | Type                             | Required | Description                                                                           |
|-----------------------------|---------------------------------|----------|---------------------------------------------------------------------------------------|
| `openModal`                 | `boolean`                      | ❌ No    | Controls the visibility of the modal.                                                |
| `onClose`                   | `() => void`                   | ❌ No    | Callback function triggered when the modal closes.                                   |
| `onOpen`                    | `() => void`                   | ❌ No    | Callback function triggered when the modal opens.                                    |
| `disableBackdropPress`       | `boolean`                      | ❌ No    | If `true`, prevents closing the modal by tapping the backdrop. Default is `false`.   |
| `closeOnHardwareBackPress`   | `boolean`                      | ❌ No    | If `true`, allows closing the modal using the hardware back button. Default is `true`. |
| `style`                     | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal container.                                                |
| `backdropStyle`             | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal backdrop.                                                 |
| `contentStyle`              | `StyleProp<ViewStyle>`         | ❌ No    | Custom style for the modal content area.                                             |
| `titleStyle`                | `StyleProp<TextStyle>`         | ❌ No    | Custom style for the modal title.                                                    |
| `modalHeight`               | `number \`${number}%` `     | ❌ No    | Sets the height of the modal.                                                        |
| `modalWidth`                | `number \`${number}%` `     | ❌ No    | Sets the width of the modal. Default is `auto`.                                      |
| `backdropOpacity`           | `number`                       | ❌ No    | Sets the opacity of the backdrop. Default is `0.5`.                                  |
| `title`                     | `string`                       | ✅ Yes   | Title of the modal.                                                                  |
| `header`                    | `React.ReactNode`              | ❌ No    | Custom header content inside the modal.                                             |
| `footer`                    | `React.ReactNode`              | ❌ No    | Custom footer content inside the modal.                                             |
| `showCloseIcon`             | `boolean`                      | ❌ No    | If `true`, displays a close icon on the modal. Default is `true`.                   |
| `keyboardAvoiding`          | `boolean`                      | ❌ No    | If `true`, enables keyboard avoiding behavior.                                       |
| `children`                  | `React.ReactNode`              | ✅ Yes   | The content to be displayed inside the modal.                                        |

## Example Usage

```tsx
import { DomainMainContainer, DomainModal } from "domaincomponent";
import { useState } from "react";
import { View, Button, Text } from "react-native";

const DomainModalExample = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <DomainMainContainer>
            <Button title="Open Modal" onPress={() => setOpenModal(true)} />
            <DomainModal title="Domain Modal"
                openModal={openModal}
                onClose={() => setOpenModal(false)}
                showCloseIcon={true}
                disableBackdropPress={false}
                animationType='fade'
                modalWidth={'90%'}
                footer={<Button title="Close" onPress={() => setOpenModal(false)}></Button>}>
                <View>
                    <Text>Hello World</Text>
                </View>
            </DomainModal>
        </DomainMainContainer>
    )
}

export default DomainModalExample;
```

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
