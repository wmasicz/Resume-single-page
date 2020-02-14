import React, { Component } from 'react'

const exp = [
    {
        name: 'Frontend Trainee',
        company: 'Grupa Pracuj Sp. z o. o.',
        location: 'Warsaw, PL',
        from: '02-2020',
        to: 'current',
        resp: [
            'maintenance of the pracuj.pl',
            'fixing bugs',
            'code refactoring',
            'writing test cases',
            'manual tests',
            'tech stack: HTML5, CSS, JS, React, Sass'
        ]
    },
    {
        name: 'Junior Graphic Designer/Web Designer',
        company: 'Grupa Pracuj Sp. z o. o.',
        location: 'Warsaw, PL',
        from: '07-2019',
        to: 'current',
        resp: [
            'designing layouts for jobboard ads',
            'solving code problems',
            'designing mailings',
            'graphic support for Customer Care Dep.'
        ]
    },
    {
        name: 'Junior Graphic Designer/Web Designer Trainee',
        company: 'Grupa Pracuj Sp. z o. o.',
        location: 'Warsaw, PL',
        from: '04-2019',
        to: '06-2019',
        resp: [
            'supporting Graphic Studio in designing layouts for jobboard ads',
            'solving code problems',
            'graphic support for Customer Care Dep.'
        ]
    }
]

export default class Exp extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Experience</h1>
                <div>
                    <ul className="exp">
                        {
                            exp.map((item, index) =>
                            <li key={index} className="exp__job">
                                <h2 className="exp__job-position">{item.name}</h2>
                                <h3 className="exp__job-company">{item.company}</h3>
                                <h3 className="exp__job-location">{item.location}</h3>
                                <p className="exp__job-time">From: {item.from} to: {item.to}</p>
                                <ul className="exp__job-resps">
                                    {
                                        item.resp.map((x, y) =>
                                        <li className="exp__job-resps-resp" key={y}>{x}</li>
                                        )
                                    }
                                </ul>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
