import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from './../PageBase';
import CustomObjectSelecter from './../CustomObjectSelecter';

const styles = {
    toggleDiv: {
        maxWidth: 300,
        marginTop: 40,
        marginBottom: 5
    },
    toggleLabel: {
        color: grey400,
        fontWeight: 100
    },
    buttons: {
        marginTop: 30,
        float: 'right'
    },
    saveButton: {
        marginLeft: 5
    }
};

class SidePanel extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            objects: [],
            selectedObject: null,
        };
    }

    setObject(object) {
        this.setState({ selectedObject: object });
    }

    render() {
        const { objects } = this.props;
        return (
            <PageBase>
                <form>

                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        fullWidth={true}
                    />
                    <CustomObjectSelecter objects={objects} selectedObject={this.state.selectedObject} setObject={this.setObject.bind(this)} />
                    <SelectField
                        floatingLabelText="City"
                        value=""
                        fullWidth={true}>
                        <MenuItem key={0} primaryText="London"/>
                        <MenuItem key={1} primaryText="Paris"/>
                        <MenuItem key={2} primaryText="Rome"/>
                    </SelectField>

                    <DatePicker
                        hintText="Expiration Date"
                        floatingLabelText="Expiration Date"
                        fullWidth={true}/>

                    <div style={styles.toggleDiv}>
                        <Toggle
                            label="Disabled"
                            labelStyle={styles.toggleLabel}
                        />
                    </div>

                    <Divider/>

                    <div style={styles.buttons}>
                        <RaisedButton label="Cancel"/>

                        <RaisedButton label="Save"
                                      style={styles.saveButton}
                                      type="submit"
                                      primary={true}/>
                    </div>
                </form>
            </PageBase>
        );
    }
};

export default SidePanel;