/* eslint indent: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-no-bind: 0 */
/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/no-multi-comp: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint react/jsx-boolean-value: 0 */
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import moment from 'moment';

class VoteButton extends React.Component {
      constructor(props) {
          super(props);
          this.state = { votes: props.votes };
        }
      handleClick(delta) {
        this.setState({ votes: this.state.votes += delta });
      }
      render() {
        return (<div className="button">
           <button onClick={this.handleClick.bind(this, 1)}>{ this.props.title }⬆︎</button>
           <strong> баллов: { this.state.votes }</strong></div>
        );
      }
  }

  class VoteButtonList extends React.Component {
        constructor(props) {
          super(props);
          this.state = { frameworks: [] };
        }
        componentDidMount() {
          fetch(this.props.url)
          .then(x => x.json())
          .then(frameworks => this.setState({ frameworks }));
        }
        render() {
          const buttons = this.state.frameworks.map(x => <VoteButton key={x.id} title={x.title} votes={x.votes} />);
          return (
            <div>
              <ul>
                { buttons }
              </ul>
              <MuiThemeProvider>
                  <DatePicker
                    onChange={(n = null, date) => alert(moment(date).format('DD.MM.YYYY HH:mm:ss'))}
                    floatingLabelText="Выберите дату!"
                    autoOk={true}
                  />
              </MuiThemeProvider>
            </div>
          );
        }
  }


  render(
      <VoteButtonList url="https://kodaktor.ru/j/react5b_6cbf2" />,
        document.querySelector('div'),
  );
