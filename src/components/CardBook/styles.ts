import styled from "styled-components/native";

export const ContainerBook = styled.TouchableOpacity`
  width: 150px;
  height: 370px;
  margin: 0 5px;
  align-items: center;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const ImageBook = styled.Image`
  width: 95%;
  height: 200px;
  margin-top: 3%;
  border-radius: 4px;
`;
export const ContainerInfo = styled.View`
  height: 150px;
  margin: 5%;
  justify-content: space-between;
`;
export const TitleBook = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const DescriptionBook = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
export const PriceBook = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SSM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const ButtonCart = styled.TouchableOpacity`
  padding: 3%;
  margin: 2% 0;
  border-radius: 4px;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`;