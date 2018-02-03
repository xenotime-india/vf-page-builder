import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './../styles/style.css';
import Container from './container';
import DashboardPage from './DashboardPage';
import {fetchCustomObjects} from "./api";
import {showError} from "./util/helper";
import Loader from './components/Loader';

const muiTheme = getMuiTheme({
    palette: {
        borderColor: '#d52b1e',
        primary1Color: '#d52b1e',
    },
    datePicker: {
        headerColor: '#d52b1e',
        calendarYearBackgroundColor: '#FFF',
        selectColor: '#d52b1e',
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            objects: [],
            showLoading: false,
        };
    }

    componentDidMount() {
        fetchCustomObjects().then((metadata) => {
            const customObjects = metadata.map(function (item) {
                return item.fullName;
            });
            this.setState({objects: customObjects});
        }).catch(showError);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Container>
                    { this.state.showLoading && <Loader/> }
                    <DashboardPage objects={this.state.objects} />
                </Container>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
/*
class app {
    constructor() {
        console.log("Ready for API fun!");
        this.customObjects = [];
        this.init();
    }

    init() {
        new Promise((resolve, reject) => {
            jQuery("body").load("https://xenotime-india.github.io/vf-page-builder/outsideExtension/build/template.html", function () {
                resolve();
            });
        })
        .then(() => {
            //showLoading();
            return connection.metadata.list([{type: 'CustomObject', folder: null}], apiVersion);
        })
        .then((metadata) => {
            this.customObjects = metadata.map(function (item) {
                return item.fullName;
            });
            console.log(this.customObjects);
        })
        .catch(showError);
    }
}

jQuery("link[rel='stylesheet']").remove();
jQuery('body').html('');
new app();*/
