const data = {
    average: 85.86,
    bio: `
        Hi, Zahin here! I'm a software developer currently working at 1Password.
        I am experienced in building Python and Golang based backend web applications,
        as well as in experimenting with machine learning algorithms.
        Besides coding, I also enjoy playing soccer and solving Rubik's cubes.
    `,
    transcript: [
        {
            term: '1A',
            season: 'Fall',
            year: '2018',
            courses: [
                {
                    department: 'ECE',
                    number: '105',
                    title: 'Classical Mechanics',
                    grade: 86
                },
                {
                    department: 'ECE',
                    number: '150',
                    title: 'Fundamentals of Programming',
                    grade: 89
                },
                {
                    department: 'ECE',
                    number: '190',
                    title: 'Engineering Profession & Practice',
                    grade: 93
                },
                {
                    department: 'GENE',
                    number: '191',
                    title: 'Communication in the Engineering Profession',
                    grade: 80
                },
                {
                    department: 'MATH',
                    number: '115',
                    title: 'Linear Algebra for Engineering',
                    grade: 82
                },
                {
                    department: 'MATH',
                    number: '117',
                    title: 'Calculus 1 for Engineering',
                    grade: 90
                }
            ]
        },
        {
            term: '1B',
            season: 'Winter',
            year: '2019',
            courses: [
                {
                    department: 'ECE',
                    number: '106',
                    title: 'Electricity & Magnetism',
                    grade: 85
                },
                {
                    department: 'ECE',
                    number: '108',
                    title: 'Discrete Math & Logic 1',
                    grade: 81
                },
                {
                    department: 'ECE',
                    number: '124',
                    title: 'Digital Circuits & Systems',
                    grade: 75
                },
                {
                    department: 'ECE',
                    number: '140',
                    title: 'Linear Circuits',
                    grade: 88
                },
                {
                    department: 'ECE',
                    number: '192',
                    title: 'Engineering Economics & Impact on Soceity',
                    grade: 88
                },
                {
                    department: 'MATH',
                    number: '119',
                    title: 'Calculus 2 for Engineering',
                    grade: 88
                }
            ]
        },
        {
            term: null,
            season: 'Spring',
            year: '2019',
            courses: [
                {
                    department: 'PD',
                    number: '20',
                    title: 'Engineering Workplace Skills I: Developing Reasoned Conclusions',
                    grade: 'Credit Granted'
                }
            ]
        },
        {
            term: '2A',
            season: 'Fall',
            year: '2019',
            courses: [
                {
                    department: 'ECE',
                    number: '109',
                    title: 'Materials Chemistry for Engineers',
                    grade: 87
                },
                {
                    department: 'ECE',
                    number: '204',
                    title: 'Numerical Methods',
                    grade: 80
                },
                {
                    department: 'ECE',
                    number: '205',
                    title: 'Advanced Calculus 1 for Electrical & Computer Engineers',
                    grade: 81
                },
                {
                    department: 'ECE',
                    number: '222',
                    title: 'Digital Computers',
                    grade: 85
                },
                {
                    department: 'ECE',
                    number: '240',
                    title: 'Electronic Circuits 1',
                    grade: 89
                },
                {
                    department: 'ECE',
                    number: '250',
                    title: 'Algorithms & Data Structures',
                    grade: 82
                }
            ]
        },
        {
            term: null,
            season: 'Winter',
            year: '2020',
            courses: [
                {
                    department: 'PD',
                    number: '21',
                    title: 'Engineering Workplace Skills II: Developing Effective Plans',
                    grade: 'Credit Granted'
                }
            ]
        },
        {
            term: '2B',
            season: 'Spring',
            year: '2020',
            courses: [
                {
                    department: 'BET',
                    number: '100',
                    title: 'Foundations of Entrepreneurial Practice',
                    grade: 84
                },
                {
                    department: 'ECE',
                    number: '203',
                    title: 'Probability Theory & Statistics 1',
                    grade: 100
                },
                {
                    department: 'ECE',
                    number: '206',
                    title: 'Advanced Calculus 2 for Electrical Engineers',
                    grade: 83
                },
                {
                    department: 'ECE',
                    number: '207',
                    title: 'Signals & Systems',
                    grade: 96
                },
                {
                    department: 'ECE',
                    number: '209',
                    title: 'Electronic & Electrical Properties of Materials',
                    grade: 80
                },
                {
                    department: 'ECE',
                    number: '260',
                    title: 'Electromechanical Energy Conversion',
                    grade: 80
                }
            ]
        },
        {
            term: null,
            season: 'Fall',
            year: '2020',
            courses: [
                {
                    department: 'PD',
                    number: '5',
                    title: 'Project Management',
                    grade: 'Credit Granted'
                }
            ]
        },
        {
            term: '3A',
            season: 'Winter',
            year: '2021',
            courses: [
                {
                    department: 'ECE',
                    number: '298',
                    title: 'Instrumentation & Prototyping Laboratory',
                    grade: 96
                },
                {
                    department: 'ECE',
                    number: '318',
                    title: 'Communication Systems 1',
                    grade: 75
                },
                {
                    department: 'ECE',
                    number: '340',
                    title: 'Electronic Circuits 2',
                    grade: 58
                },
                {
                    department: 'ECE',
                    number: '375',
                    title: 'Electromagnetic Fields & Waves',
                    grade: 83
                },
                {
                    department: 'ECE',
                    number: '380',
                    title: 'Analog Control Systems',
                    grade: 85
                },
                {
                    department: 'ECON',
                    number: '102',
                    title: 'Introduction to Macroeconomics',
                    grade: 75
                },
                {
                    department: 'MSCI',
                    number: '442',
                    title: 'Impact of Information Systems on Organizations & Society',
                    grade: 82
                }
            ]
        },
        {
            term: null,
            season: 'Spring',
            year: '2021',
            courses: [
                {
                    department: 'PD',
                    number: '22',
                    title: 'Professionalism & Ethics in Engineering Practice',
                    grade: 'Credit Granted'
                }
            ]
        },
        {
            term: '3B',
            season: 'Fall',
            year: '2021',
            courses: [
                {
                    department: 'EARTH',
                    number: '123',
                    title: 'Introductory Hydrology',
                    grade: 84
                },
                {
                    department: 'ECE',
                    number: '307',
                    title: 'Probability Theory & Statistics 2',
                    grade: 88
                },
                {
                    department: 'ECE',
                    number: '313',
                    title: 'Digital Signal Processing',
                    grade: 99
                },
                {
                    department: 'ECE',
                    number: '356',
                    title: 'Database Systems',
                    grade: 89
                },
                {
                    department: 'ECE',
                    number: '360',
                    title: 'Power Systems & Smart Grids',
                    grade: 81
                }
            ]
        },
        {
            term: null,
            season: 'Winter',
            year: '2022',
            courses: [
                {
                    department: 'PD',
                    number: '3',
                    title: 'Communication',
                    grade: 'Credit Granted'
                }
            ]
        },
        {
            term: '4A',
            season: 'Spring',
            year: '2022',
            courses: [
                {
                    department: 'CHEM',
                    number: '123',
                    title: 'General Chemistry 2',
                    grade: 95
                },
                {
                    department: 'ECE',
                    number: '457A',
                    title: 'Cooperative & Adaptive Algorithms',
                    grade: 87
                },
                {
                    department: 'ECE',
                    number: '457C',
                    title: 'Reinforcement Learning',
                    grade: 92
                },
                {
                    department: 'ECE',
                    number: '498A',
                    title: 'Engineering Design Project',
                    grade: 93
                },
                {
                    department: 'STAT',
                    number: '341',
                    title: 'Computational Statistics & Data Analysis',
                    grade: 83
                }
            ]
        },
        {
            term: '4B',
            season: 'Winter',
            year: '2023',
            courses: [
                {
                    department: 'CS',
                    number: '480',
                    title: 'Introduction to Machine Learning',
                    grade: 91
                },
                {
                    department: 'ECE',
                    number: '409',
                    title: 'Cryptography & System Security',
                    grade: 88
                },
                {
                    department: 'ECE',
                    number: '457B',
                    title: 'Fundamentals of Computational Intelligence',
                    grade: 93
                },
                {
                    department: 'ECE',
                    number: '493',
                    title: 'Foundations of Multi-Agent Systems',
                    grade: 88
                },
                {
                    department: 'ECE',
                    number: '498B',
                    title: 'Engineering Design Project',
                    grade: 90
                }
            ]
        }
    ]
}

export default data;
