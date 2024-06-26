import theme from "@theme/index";
import { Container, MenuButton, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ title }) => {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <>
        <MenuButton onPress={() => {
          navigation.openDrawer();
        }}>
          <Feather
            name="menu"
            size={30}
            color={theme.COLORS.BLACK}
          />

          <Title>{title}</Title>
        </MenuButton>
      </>

      <MenuButton onPress={() => {
        {}
      }}>
        <Feather
          name="shopping-cart"
          size={25}
          color={theme.COLORS.BLACK}
        />
      </MenuButton>
    </Container>
  );
}