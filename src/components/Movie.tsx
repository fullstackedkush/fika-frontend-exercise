import * as React from 'react';
import { Movie as MovieProps } from 'movie-night';
import { Image, View } from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const Body = styled.View`
  padding: 16px;
  background: ${(props) => props.theme.colors.fills.background};
  margin-bottom: 24px;
`;

const Title = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: .44px;
`;

const SubTitle = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  opacity: .54;
  letter-spacing: .25px;
`;

const Movie: React.FC<MovieProps> = ({ title, poster_path: poster, genres }) => (
  <View>
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w500/${poster}`,
      }}
      style={{ width: '100%', height: 600 }}
    />
    <Body>
      <Title>{title}</Title>
      {genres && genres.length && (
      <SubTitle>
        {genres.map(({ name }) => name).join(', ')}
      </SubTitle>
      )}
    </Body>
  </View>
);

export default Movie;
