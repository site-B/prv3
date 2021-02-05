import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props);
        let fecha = new Date()
        this.state = {
            time: new Date().toLocaleTimeString(),
            day: fecha.getDay(),
            month: fecha.getMonth(),
            date: fecha.getDate(),
            year: fecha.getFullYear()
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID); 
    }

    tick(){
        
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        return (
            <div>
                <p className='copyrightText text-center'>
                Today is {days[this.state.day]}, {months[this.state.month]} {this.state.day}, {this.state.year}. 
                The time is {this.state.date}.</p>
            </div>
        )
    }
}

export default Clock;  