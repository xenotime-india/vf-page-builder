import React from 'react';
import TextField from 'material-ui/TextField';
import {grey400} from 'material-ui/styles/colors';
import PageBase from './../PageBase';

const OutputPanel = () => {

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

    return (
        <PageBase>
            <form>
                <TextField
                    hintText="Visual Force DOM result"
                    floatingLabelText="Visual Force DOM"
                    multiLine={true}
                    fullWidth={true}
                    rows={2}
                />
            </form>
        </PageBase>
    );
};

export default OutputPanel;