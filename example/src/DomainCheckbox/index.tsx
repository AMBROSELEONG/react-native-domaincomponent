import { DomainCheckbox } from "domaincomponent";
import { View, Text } from 'react-native';
import { useState } from "react"

const DomainCheckboxExample = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <DomainCheckbox checked={isChecked} onChange={setIsChecked} color="blue" size={30} />
            <Text>{isChecked ? "Selected" : "Not Selected"}</Text>
        </View>
    );
}

export default DomainCheckboxExample;