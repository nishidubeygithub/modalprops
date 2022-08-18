import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import Flatlist from './flatlist';
import store from './store/store';


function App() {
    return (
        <Provider store={store}>
             <Flatlist/> 
            
            
        </Provider>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },

});

export default App;

