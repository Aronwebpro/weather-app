import React from 'react';
import { Text } from 'react-native';

export default class StyledText extends React.Component {
    render() {
        const { size, style, color } = this.props;

        // Size
        let fontSize = 17;
        let fontWeight = '400';
        const propStyles = {};
        //Handler Font Size
        switch (size) {
            case 'xx_large':
                propStyles.fontSize = 48;
                break;
            case 'x_large':
                 propStyles.fontSize = 42;
                break;
            case 'large_title':
                 propStyles.fontSize = 34;
                break;
            case 'title_1':
                 propStyles.fontSize = 28;
                break;
            case 'title_2' :
                 propStyles.fontSize = 22;
                break;
            case 'title_3':
                 propStyles.fontSize = 20;
                break;
            case 'headline':
                 propStyles.fontSize = 17;
                propStyles.fontWeight = '600';
                break;
            case 'body' :
                 propStyles.fontSize = 17;
                break;
            case 'callout':
                 propStyles.fontSize = 16;
                break;
            case 'subhead':
                 propStyles.fontSize = 15;
                break;
            case 'footnote':
                 propStyles.fontSize = 13;
                break;
            case 'caption_1':
                 propStyles.fontSize = 12;
                break;
            case 'caption_2':
                 propStyles.fontSize = 11;
                break;
        }

        //Handle Color
        color ? propStyles.color = color : '';

        return (
            <Text
                {...this.props}
                style={[this.props.style, propStyles]}
            />
        )
    }
}
