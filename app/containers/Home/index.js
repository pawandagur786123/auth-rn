/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions={
		header:null
    };
    
  constructor(props) {
    super(props);

    this.state = {
        json_data:[],
    }
  }


    componentDidMount(){
        this.getlocalvalues()
    }

    getlocalvalues(){
        if(this.props.DETAIL.fetch_completed){
            console.log(this.props.DETAIL.dashboard)
            this.setState({json_data:this.props.DETAIL.dashboard})
        }
    }




    render(){

        return (
            <View style={styles.container}> 
                <ScrollView>
                {this.state.json_data.length > 0 ?
                    <View style={{flexDirection:'column',margin:20}}>
                        {this.state.json_data.map((data, index)=>{
                            return(
                                <View style={{flexDirection:'column',height:150,elevation:10,backgroundColor:'rgba(255,255,255,0.8)',borderWidth:1,borderColor:'rgba(255,255,255,0.8)',padding:20,margin:10}}>
                                    <Text>Name: {data.name}</Text>
                                    <Text>Age: {data.age}</Text>
                                    <Text>email: {data.email}</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    </View>
                                </View>
                            )
                        })
                        }
                    </View>
                :
                    <View>
                        <Text>No Records found</Text>
                    </View>
                }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'rgba(0,0,0,0.1)'
    },
    button: {
        marginTop:5,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffcc00',
        width: 80,
        padding: 5,
    },
    buttontext:{
        color: '#11127c',
        fontWeight: 'bold',
        textShadowColor: '#fff',
        textShadowOffset: {width: 4, height: 1},
        textShadowRadius: 10
    },
})

function mapStateToProps(state) {
    return {
        DETAIL: state,
    }
}



export default connect(mapStateToProps)(HomeScreen);
