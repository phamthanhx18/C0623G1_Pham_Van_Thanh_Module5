import React, {Component} from "react";

const studentList = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
];

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: studentList
        };
    }

    render() {
        return <>
            <table>
                {
                    this.state.studentList.map(student => (
                        <tr>
                            <td>{student.company}</td>
                            <td>{student.contact}</td>
                            <td>{student.country}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    }
}

export default Student;