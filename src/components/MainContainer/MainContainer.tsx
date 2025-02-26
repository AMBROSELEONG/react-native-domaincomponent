import { MainContainer } from '../../objects/style';
import type { DomainMainContainerProps } from './MainContainerProps';
import { SafeAreaView } from 'react-native';

const DomainMainContainer: React.FC<DomainMainContainerProps> = ({
  children,
}) => {
  return (
    <SafeAreaView style={MainContainer.container}>{children}</SafeAreaView>
  );
};

export default DomainMainContainer;
