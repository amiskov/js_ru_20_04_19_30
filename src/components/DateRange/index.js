import React from 'react';
import moment from 'moment';
import DayPicker, {DateUtils} from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import './index.less';

export default class Range extends React.Component {
    state = {
        from: null,
        to: null,
    };
    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };

    render() {
        const {from, to} = this.state;
        return (
            <div className="DateRange">
                <div className="DateRange-picker">
                    <DayPicker
                        numberOfMonths={1}
                        selectedDays={[from, {from, to}]}
                        onDayClick={this.handleDayClick}
                    />
                </div>
                {!from && !to && <p className="DateRange-msg">Please select the <strong>first day</strong>.</p>}
                {from && !to && <p className="DateRange-msg">Please select the <strong>last day</strong>.</p>}
                {from &&
                to &&
                <p className="DateRange-msg">
                    You chose from {' '} {moment(from).format('L')}
                    {' '} to {' '} {moment(to).format('L')}.<br/>
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
            </div>
        );
    }
}