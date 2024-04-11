import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Title = styled.Text`
  margin: 15% 0 5% 5%;
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
export const ScrollContainer = styled.ScrollView`
`;