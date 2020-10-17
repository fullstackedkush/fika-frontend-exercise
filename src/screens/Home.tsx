import * as React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import styled from 'styled-components/native';
import { Movie as MovieProps, ScreenProps } from 'movie-night';
import Movie from '../components/Movie';
import useMovies from '../hooks/useMovies';

interface HomeProps {
  navigation: ScreenProps<'Home'>
}

const Wrapper = styled.View`
  padding: 84px 8px 0;
  background: ${(props) => props.theme.colors.fills.shade};
  flex: 1;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
    background: ${(props) => props.theme.colors.fills.background};
`;

const renderItem:ListRenderItem<MovieProps> = ({ item }) => (
  <Movie {...item} />
);

const Home: React.FC<HomeProps> = () => {
  const { movies, flatListRef, nextPage } = useMovies();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapper>
        <FlatList
          ref={flatListRef}
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          onEndReached={nextPage}
          onEndReachedThreshold={3}
        />
      </Wrapper>
    </SafeAreaView>
  );
};

export default Home;
