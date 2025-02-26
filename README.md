# Installation

```sh
npm install domaincomponent
```

# Usage

## DomainTextInput Component

### Description
`DomainTextInput` is a customizable text input component that extends `TextInputProps` and `TextInputIOSProps`, providing additional styling and configuration options.

### Props

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
| `inputColor`      | `ColorValue`                     | ❌ No    | Text color of the input field.                          |

### Example Usage

```tsx
import React from 'react';
import { View } from 'react-native';
import { DomainTextInput } from 'domaincomponent';

const App = () => {
  return (
    <View>
      <DomainTextInput
        name="email"
        label="Email Address"
        helperText="Enter a valid email"
        inputColor="black"
        labelColor="gray"
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

![WhatsApp Image 2025-02-26 at 16 31 11_b36ce195](https://github.com/user-attachments/assets/96bc67c1-0e34-439f-be0b-0abf20ecaca9)

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

const options = [
  { id: '1', name: 'Option 1' },
  { id: '2', name: 'Option 2' },
  { id: '3', name: 'Option 3' },
];

const App = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>();

  return (
    <View>
      <DomainSelect
        options={options}
        value={selectedValue}
        onChange={setSelectedValue}
        placeholder="Select an option"
        label="Dropdown"
        resetButton={true}
      />
    </View>
  );
};

export default App;
```



See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
