import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
  } from 'react-native';
import MovieImage from './Movieimg'
import MovieSection from './Moviesection';

class MovieDetail extends Component {
    state = {  }
    render() { 
        const {
            original_title,
            release_date,
            backdrop_path,
            poster_path
        } = this.props.movie

        const {
            thumbnailContainerStyle,
            thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            imageStyle
        } = styles

        return (
            <MovieImage>
                <MovieSection>
                    <View style={thumbnailContainerStyle}>
                        <Image 
                            source={{uri: `http://image.tmdb.org/t/p/w342/${backdrop_path}`}}
                            style={thumbnailStyle}
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{original_title}</Text>
                        <Text>{release_date}</Text>
                    </View>
                </MovieSection>
                <MovieSection>
                    <Image 
                        style={imageStyle}
                        source={{uri: `http://image.tmdb.org/t/p/w342/${poster_path}`}}
                    />
                </MovieSection>
            </MovieImage>
          );
    }
}

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 25
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex:1
    }        
})

export default MovieDetail;