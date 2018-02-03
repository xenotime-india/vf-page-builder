import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

export default class CustomObjectSelector extends Component {

    handleChange(event, index, value) {
        // this.setState({ lang: value });
        this.props.setObject(value);
    }

    selectItem(key, object) {
        return (<MenuItem key={key} value={object} primaryText={object} />);
    }

    selectItemsMap() {
        return this.props.objects.map((object, i) => this.selectItem(i, object));
    }

    render() {
        return (<SelectField
            floatingLabelText="Custom Object"
            value={this.props.selectedObject}
            onChange={this.handleChange.bind(this)}
        >
            { this.selectItemsMap() }
        </SelectField>);
    }

}

