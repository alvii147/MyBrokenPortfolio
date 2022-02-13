import PythonLogo from '../../images/Skills/python_logo.png';
import CppLogo from '../../images/Skills/cpp_logo.png';
import GoLogo from '../../images/Skills/go_logo.png';
import JavascriptLogo from '../../images/Skills/javascript_logo.png';
import BashLogo from '../../images/Skills/bash_logo.png';

import DjangoLogo from '../../images/Skills/django_logo.png';
import ReactLogo from '../../images/Skills/react_logo.png';
import FlaskLogo from '../../images/Skills/flask_logo.png';
import DockerLogo from '../../images/Skills/docker_logo.png';
import GoogleCloudLogo from '../../images/Skills/googlecloud_logo.png';
import AWSLogo from '../../images/Skills/aws_logo.png';
import RailsLogo from '../../images/Skills/rails_logo.png';

import MySQLLogo from '../../images/Skills/mysql_logo.png';
import NumPyLogo from '../../images/Skills/numpy_logo.png';
import MatplotlibLogo from '../../images/Skills/matplotlib_logo.png';
import PandasLogo from '../../images/Skills/pandas_logo.png';
import PostgreSQLLogo from '../../images/Skills/postgresql_logo.png';
import ScikitLearnLogo from '../../images/Skills/sklearn_logo.png';
import TensorflowLogo from '../../images/Skills/tensorflow_logo.png';
import KerasLogo from '../../images/Skills/keras_logo.png';
import OpencvLogo from '../../images/Skills/opencv_logo.png';
import RLogo from '../../images/Skills/r_logo.png';

import CommunicationLogo from '../../images/Skills/communication_logo.png';
import ProblemsolvingLogo from '../../images/Skills/problemsolving_logo.png'
import DocumentationLogo from '../../images/Skills/documentation_logo.png';
import OrganizationalLogo from '../../images/Skills/organizational_logo.png';

const data = {
    languages: [
        {
            name: 'Python',
            logo: PythonLogo,
            strength: '95%',
            color: 'linear-gradient(to right, #00599C, #0082E6)',
        },
        {
            name: 'C++',
            logo: CppLogo,
            strength: '82%',
            color: 'linear-gradient(to right, #3776AB, #659ECD)',
        },
        {
            name: 'Go',
            logo: GoLogo,
            strength: '80%',
            color: 'linear-gradient(to right, #00ADD8, #99EBFF)',
        },
        {
            name: 'JavaScript',
            logo: JavascriptLogo,
            strength: '72%',
            color: 'linear-gradient(to right, #F7DF1E, #FCF19C)',
        },
        {
            name: 'Bash',
            logo: BashLogo,
            strength: '61%',
            color: 'linear-gradient(to right, #4EAA25, #9FE382)',
        },
    ],
    frameworks: [
        {
            name: 'Django',
            logo: DjangoLogo,
            strength: '91%',
            color: 'linear-gradient(to right, #092E20, #1D9567)',
        },
        {
            name: 'React.js',
            logo: ReactLogo,
            strength: '78%',
            color: 'linear-gradient(to right, #61DAFB, #B4EEFD)',
        },
        {
            name: 'Docker',
            logo: DockerLogo,
            strength: '74%',
            color: 'linear-gradient(to right, #2496ED, #71BBF4)',
        },
        {
            name: 'Flask',
            logo: FlaskLogo,
            strength: '65%',
            color: 'linear-gradient(to right, #000000, #666666)',
        },
        {
            name: 'Google Cloud',
            logo: GoogleCloudLogo,
            strength: '58%',
            color: 'linear-gradient(to right, #EA4335, #F07F75)',
        },
        {
            name: 'Amazon Web Services',
            logo: AWSLogo,
            strength: '56%',
            color: 'linear-gradient(to right, #232F3E, #7C96B6)',
        },
        {
            name: 'Ruby on Rails',
            logo: RailsLogo,
            strength: '55%',
            color: 'linear-gradient(to right, #CC0000, #FF8080)',
        },
    ],
    data: [
        {
            name: 'MySQL',
            logo: MySQLLogo,
            strength: '93%',
            color: 'linear-gradient(to right, #4479A1, #A5C3D9)',
        },
        {
            name: 'NumPy',
            logo: NumPyLogo,
            strength: '92%',
            color: 'linear-gradient(to right, #013243, #027297)',
        },
        {
            name: 'Matplotlib',
            logo: MatplotlibLogo,
            strength: '82%',
            color: 'linear-gradient(to right, #E64D00, #FF884D)',
        },
        {
            name: 'Pandas',
            logo: PandasLogo,
            strength: '80%',
            color: 'linear-gradient(to right, #150458, #340ADB)',
        },
        {
            name: 'PostgreSQL',
            logo: PostgreSQLLogo,
            strength: '78%',
            color: 'linear-gradient(to right, #4169E1, #7B97EA)',
        },
        {
            name: 'scikit-learn',
            logo: ScikitLearnLogo,
            strength: '75%',
            color: 'linear-gradient(to right, #F7931E, #FBCF9D)',
        },
        {
            name: 'TensorFlow',
            logo: TensorflowLogo,
            strength: '75%',
            color: 'linear-gradient(to right, #FF6F00, #FFA866)',
        },
        {
            name: 'Keras',
            logo: KerasLogo,
            strength: '75%',
            color: 'linear-gradient(to right, #D00000, #FF3333)',
        },
        {
            name: 'OpenCV',
            logo: OpencvLogo,
            strength: '69%',
            color: 'linear-gradient(to right, #5C3EE8, #9F8DF2)',
        },
        {
            name: 'R',
            logo: RLogo,
            strength: '55%',
            color: 'linear-gradient(to right, #276DC3, #7FADE6)',
        },
    ],
    soft: [
        {
            name: 'Communication',
            logo: CommunicationLogo,
            strength: '95%',
            color: 'linear-gradient(to right, #8BC1DA, #D8EAF3)',
        },
        {
            name: 'Problem Solving',
            logo: ProblemsolvingLogo,
            strength: '85%',
            color: 'linear-gradient(to right, #F7CB4F, #F9DA85)',
        },
        {
            name: 'Documentation',
            logo: DocumentationLogo,
            strength: '80%',
            color: 'linear-gradient(to right, #FF6838, #FFB199)',
        },
        {
            name: 'Organizational',
            logo: OrganizationalLogo,
            strength: '78%',
            color: 'linear-gradient(to right, #21B794, #53DFBF)',
        },
    ],
}

export default data;