import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
// import DeviceInfo from 'react-native-device-info'
import {Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class LLNav extends Component {

    constructor(props) {
        super(props);
        //nav颜色
        this.navBackgroundColor = this.props.navBackgroundColor;
        //nav设置图片背景
        this.navBackgroundImage = this.props.navBackgroundImage;
        //标题视图
        this.titleView = this.props.titleView;
        //标题
        this.title = this.props.title;
        //标题颜色
        this.titleColor = this.props.titleColor;
        //标题字号
        this.titleFont = this.props.titleFont;
        //右边按钮
        this.props.rightButtons = [];
        //左按钮
        this.props.leftButtons = [];
    }

    //主标题
    renderTitle() {
        if (this.props.titleView) {
            return (
                <View style={[styles.titleViewStyle, {justifyContent: 'center'}]}>
                    {this.props.titleView}
                </View>
            );
        } else {
            return (
                <View style={styles.titleViewStyle}>
                    <Text style={[styles.titleStyle, {color: this.props.titleColor, fontSize: this.props.titleFont}]}>{this.props.title}</Text>
                </View>
            );
        }
        
    }
    //左按钮们
    renderLeftButtons() {
        if (this.props.leftButtons) {
            return (
                <View style={[styles.buttonViewStyle, {left: 8}]}>
                    {this.props.leftButtons}
                </View>
            );
        }
    }
    //右按钮们
    renderRightButtons() {
        if (this.props.rightButtons) {
            return (
                <View style={[styles.buttonViewStyle, {right: 8}]}>
                    {this.props.rightButtons}
                </View>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imageBackgroundContainer}
                source={this.props.navBackgroundImage}
                >
                    {this.renderLeftButtons()}
                    {this.renderTitle()}
                    {this.renderRightButtons()}
                </ImageBackground>
            </View>
        );
    }
}

//nav高度
var navHeight = Platform.OS == 'ios' ? 64 : 44;
//状态栏高度，nav主内容距上部的高度
var marginTop = Platform.OS == 'ios' ? 20 : 0;
//ios全面屏
if ((width == 375 && height == 812) || (width == 414 && height == 896) && Platform.OS == 'ios') {
    navHeight = 88;
    marginTop = 44;
}

const styles = StyleSheet.create({
    container: {
      width: width,
      height: navHeight,
      backgroundColor: 'white',
    },
    imageBackgroundContainer: {
        width: width,
        height: navHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonViewStyle: {
        position: 'absolute',
        flexDirection: 'row',
        height: navHeight - marginTop,
        bottom: 0,
        alignItems: 'center',
    },
    titleViewStyle: {
      marginTop: marginTop, 
      height: navHeight - marginTop,
    },
    titleStyle: {
        lineHeight: navHeight - marginTop,
        color: 'black',
        textAlign: 'center',
    },
});