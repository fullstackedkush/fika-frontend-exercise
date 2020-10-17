import React, { useCallback, useContext, useState } from 'react';
import styled, { Color, css, useTheme } from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';
import { StateContext } from '../context/state';
import Text from './Text';
import { fill } from '../theme';

const color = ({ theme }: Color) => fill(theme, 'background', 'main');
const icon = ({ theme }: Color) => fill(theme, 'background', 'icon');
const backgroundColor = ({ theme }: Color) => fill(theme, 'primary', 'background');

const SafeAreaView = styled.SafeAreaView`
  background-color: ${backgroundColor};
  ${(props) => !props.theme.dark && css`
    shadow-color: #000;
    shadow-opacity: 0.12;
    shadow-offset: 0px 0px;
    shadow-radius: 5px;
  `}
`;

const View = styled.View`
  padding: 16px 72px;
  position: relative;
`;

const text = css`
  font-size: 20px;
  line-height: 28px;
  color:  ${color};
  position: relative;
  &::placeholder {
    color:  ${color};
  }
`;

const Title = styled(Text)`
  ${text}
`;

const Search = styled.TextInput.attrs((props) => ({
  placeholderTextColor: color(props),
}))`
  ${text};
  line-height: 25px;
  padding-bottom: 3px;
`;

const Icon = styled.TouchableHighlight`
  position: absolute;
  bottom: 22px;
  font-size: 14px;
  line-height: 14px;
`;

const NavIcon = styled(Icon)`
    left: 21px;
`;

const SearchIcon = styled(Icon)`
  right: 21px;
`;

type NavigationProps = {
  navigation: any
};

const Navigation: React.FC<NavigationProps> = () => {
  const { switchTheme, setQuery } = useContext(StateContext);
  const theme = useTheme();
  const [searching, setSearching] = useState<boolean>(false);
  const debounceSearch = useCallback(debounce(setQuery, 500), []);

  return (
    <SafeAreaView>

      <View>
        <NavIcon onPress={switchTheme}>
          <FontAwesomeIcon icon={theme.dark ? faMoon : faSun} color={icon({ theme })} />
        </NavIcon>
        {searching ? (
          <Search autoFocus placeholder="Search..." onChangeText={debounceSearch} />
        ) : (
          <Title>Movie Night</Title>
        )}
        <SearchIcon onPress={() => setSearching(!searching)}>
          <FontAwesomeIcon icon={faSearch} color={icon({ theme })} />
        </SearchIcon>
      </View>
    </SafeAreaView>
  );
};

const ScreenOptions = ({ navigation } : NavigationProps) => ({
  header: () => <Navigation navigation={navigation} />,
  headerTransparent: true,
});

export default ScreenOptions;
