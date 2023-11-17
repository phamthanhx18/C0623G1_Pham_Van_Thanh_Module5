import React, {Component} from "react";

const studentList = [
    {
        id: 1,
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        id: 2,
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        id: 3,
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        id: 4,
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        id: 5,
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        id: 6,
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
                    this.state.studentList.map((student,index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
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