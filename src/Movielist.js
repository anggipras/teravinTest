import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    Animated,
    TouchableOpacity
  } from 'react-native';
import Axios from 'axios'
import MovieDetail from './Moviedetail'
import Header from './Header'
import SplashScreen from './Splashscreen'
import * as Animatable from 'react-native-animatable';
// import { Button } from 'react-native-elements';

const MovieList = () => {
    const [themovies, setmovies] = useState([])
    const [loading, setloading] = useState(true)
    const [showView, setshowView] = useState(false)
    useEffect(()=> {
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf')
        .then((res)=> {
            // setmovies(res.data.results)
            // setloading(false)
            var someMovies = res.data.results.filter((val, ind)=> {
                return ind < 10
            })
            setmovies(someMovies)
            setloading(false)
            setshowView(true)
        }).catch((err)=> {
            console.log(err);
            alert('Tidak ada koneksi internet')
        })
    },[])

    const viewTimeOut = () => {
        setTimeout(() => {
            setshowView(true)
        }, 60000);
    }

    useEffect(()=> {
        if(showView == true) {
            setTimeout(() => {
                setshowView(false)
                viewTimeOut()
            }, 5000);
        }
    },[showView])

    const renderMovies = () => {
        return themovies.map((mvi, ind)=> {
            return (
                <MovieDetail key={ind} movie={mvi}/>
            )
        })
    }

    const showPress = () => {
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf')
        .then((res)=> {
            var someMovies = res.data.results.filter((val, ind)=> {
                return ind < 10
            })
            someMovies.sort(function(a, b) {
                return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
            })
            setmovies(someMovies)
            setTimeout(() => {
                setshowView(false)
            }, 5000);
        }).catch((err)=> {
            console.log(err);
            alert('Tidak ada koneksi internet')
        })
    }

    if(loading) {
        return (
          <SplashScreen />
        )
    }

    const {notifStyle} = styles

    return (
        <View>
            <Header headertext={'MovieList'}/>
            <ScrollView>
                {renderMovies()}
            </ScrollView>
            {
                showView?
                <Animatable.View animation='fadeInUp' style={notifStyle}>
                    <Text style={{
                        width: '60%',
                        fontSize: 20
                    }}>Penyimpanan lokal telah diperbaharui</Text>
                    <Button 
                        title = 'TAMPILKAN'
                        color = '#000'
                        onPress = {showPress}
                    />
                </Animatable.View>
                :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    notifStyle: {
        display: 'flex',
        flexDirection: 'row',
        height: 110,
        width: '100%',
        backgroundColor: 'gray',
        elevation: 2,
        position: 'absolute',
        bottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MovieList