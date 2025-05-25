import OnePasswordLogo from '../../images/Experience/1Password_logo.png';
import OnePasswordLogoThumbnail from '../../images/Experience/1Password_logo_thumbnail.png';
import ProdigyEducationLogo from '../../images/Experience/prodigy_education_logo.png';
import ProdigyEducationLogoThumbnail from '../../images/Experience/prodigy_education_logo_thumbnail.png';
import NokiaLogo from '../../images/Experience/nokia_logo.png';
import NokiaLogoThumbnail from '../../images/Experience/nokia_logo_thumbnail.png';
import WindRiverLogo from '../../images/Experience/windriver_logo.png';
import WindRiverLogoThumbnail from '../../images/Experience/windriver_logo_thumbnail.png';
import QualcommLogo from '../../images/Experience/qualcomm_logo.png';
import QualcommLogoThumbnail from '../../images/Experience/qualcomm_logo_thumbnail.png';
import ImagineCommunicationsLogo from '../../images/Experience/imaginecommunications_logo.png';
import ImagineCommunicationsThumbnail from '../../images/Experience/imaginecommunications_logo_thumbnail.png';
import WatonomousLogo from '../../images/Experience/watonomous_logo.png';
import WatonomousLogoThumbnail from '../../images/Experience/watonomous_logo_thumbnail.png';
import SJWSPythonClubLogo from '../../images/Experience/sjwspythonclub_logo.png';
import SJWSPythonClubLogoThumbnail from '../../images/Experience/sjwspythonclub_logo_thumbnail.png';

const data = [
    {
        active: true,
        company: '1Password',
        role: 'Software Developer',
        logo: OnePasswordLogo,
        thumbnail: OnePasswordLogoThumbnail,
        interval: 'March 2025 - Present',
        description: [
            'Diagnosed and resolved complex invoicing defect in <span class="experience-strong">Stripe</span> integration, recovering <span class="experience-strong">$300k+</span> in annual revenue',
            'Automated tax notification process over 13 countries and respective regions, significantly reducing manual effort',
        ],
    },
    {
        active: true,
        company: '1Password',
        role: 'Junior Software Developer',
        logo: OnePasswordLogo,
        thumbnail: OnePasswordLogoThumbnail,
        interval: 'July 2023 - Feb 2025',
        description: [
            'Engineered automated customer reimbursement worker, refunding <span class="experience-strong">2k+</span> invoices and saving <span class="experience-strong">$45k+</span> in revenue',
            'Optimized subscription management processor, condensing average daily runtime from <span class="experience-strong">6 hours</span> to 45 <span class="experience-strong">minutes</span>',
            'Spearheaded internal invoice PDF generation service, addressing <span class="experience-strong">300+</span> customer feature requests',
        ],
    },
    {
        active: true,
        company: '1Password',
        role: 'Software Developer Intern',
        logo: OnePasswordLogo,
        thumbnail: OnePasswordLogoThumbnail,
        interval: 'Sept 2022 - Dec 2022',
        description: [
            'Managed subscription tier upgrade/downgrade logic through <span class="experience-strong">Stripe</span> integration in <span class="experience-strong">Go</span> and feature flags',
            'Significantly improved credit card form and payment flow user experience using <span class="experience-strong">React</span> and <span class="experience-strong">Typescript</span>',
            '<span class="experience-strong">Dockerized</span> billing microservice for Apply Pay and Play Store subscriptions using multi-staged Docker builds',
        ],
        evaluation: 'Outstanding',
        noShadow: true,
    },
    {
        active: true,
        company: 'Prodigy Education',
        role: 'Full-Stack Developer Intern',
        logo: ProdigyEducationLogo,
        thumbnail: ProdigyEducationLogoThumbnail,
        interval: 'Jan 2022 - April 2022',
        description: [
            'Maintained <span class="experience-strong">OAuth 2.0</span> & <span class="experience-strong">OpenID Connect</span> identity service built on <span class="experience-strong">Ruby on Rails</span>',
            'Leveraged multi-staged <span class="experience-strong">Docker</span> builds to optimize production server container hosted on <span class="experience-strong">Amazon ECS</span>, reducing image size by <span class="experience-strong">58.4%</span>',
            'Designed and documented <span class="experience-strong">Apache Kafka</span> calls to stream backend server events for data tracking and verified data payloads with unit tests utilizing <span class="experience-strong">RSpec</span> & <span class="experience-strong">Minitest</span> on Rails',
            'Configured frontend <span class="experience-strong">A/B testing</span> experiments on Optimizely to track performance of UI variations and assess statistical significance of results',
        ],
        evaluation: 'Outstanding',
    },
    {
        active: true,
        company: 'Nokia',
        role: 'Full-Stack Developer Intern',
        logo: NokiaLogo,
        thumbnail: NokiaLogoThumbnail,
        interval: 'May 2021 - Aug 2021',
        description: [
            'Developed and managed authentication security, community articles page, and voucher redemption system for <a href="https://network.developer.nokia.com/" target="_blank" rel="noopener noreferrer" class="experience-link">Nokia Network Developer Portal</a> on <span class="experience-strong">Django</span> server</a> with an <span class="experience-strong">Azure MySQL</span> database',
            'Secured backend using <span class="experience-strong">Django REST framework</span> API authentication, cross site scripting protection, and honeypot setups',
            'Composed unit tests for Django forms, models, and REST API endpoints using Python <span class="experience-strong">unittest</span> module and configured <span class="experience-strong">Docker</span> image for <span class="experience-strong">Gitlab CI</span> automation testing',
            'Designed responsive frontend in <span class="experience-strong">Jinja2</span> templates by utilizing <span class="experience-strong">jQuery</span> and <span class="experience-strong">Bootstrap</span>',
        ],
        evaluation: 'Outstanding',
    },
    {
        active: true,
        company: 'Wind River Systems',
        role: 'Software Developer Intern',
        logo: WindRiverLogo,
        thumbnail: WindRiverLogoThumbnail,
        interval: 'Sept 2020 - Dec 2020',
        description: [
            'Fixed multi-threading and memory-based defects for VxWorks RTOS and Helix Virtualization Platform',
            'Debugged and reconfigured source code in <span class="experience-strong">C</span> and utilized inline <span class="experience-strong">Assembly</span> to write thread-safe functions',
            'Developed interactive program in <span class="experience-strong">PyQt5</span> that assists in writing git commit messages, and verifies status of Jira issues and code reviews',
            'Formulated git hook script to detect and block commits on restricted files',
        ],
        evaluation: 'Excellent',
    },
    {
        active: true,
        company: 'Qualcomm',
        role: 'Hardware Verification Engineering Intern',
        logo: QualcommLogo,
        thumbnail: QualcommLogoThumbnail,
        interval: 'Jan 2020 - May 2020',
        description: [
            'Engineered <span class="experience-strong">SystemVerilog</span> assertions and <span class="experience-strong">C++</span> simulation tests to verify display processor design',
            'Attained <span class="experience-strong">20%</span> increase in functional coverages by debugging waveform using Synopsys Verdi tool',
            'Automated formal verification using <span class="experience-strong">Perl</span> scripting to extract design hierarchy and formulate assertions',
            'Web-scraped design database and employed <span class="experience-strong">PyQt5</span> to build interactive GUI for managing hardware registers',
        ],
        evaluation: 'Excellent',
    },
    {
        active: true,
        company: 'Imagine Communications',
        role: 'Embedded Software Developer Intern',
        logo: ImagineCommunicationsLogo,
        thumbnail: ImagineCommunicationsThumbnail,
        interval: 'May 2019 - Aug 2019',
        description: [
            'Reconstructed source code in <span class="experience-strong">C/C++</span> on a Linux environment to fix firmware bugs',
            'Extracted IP routing data from data structures and developed troubleshooting functions and mapping tables',
            'Utilized <span class="experience-strong">SoapUI</span> to inspect and track REST API processes',
        ],
        evaluation: 'Very Good',
    },
    {
        active: false,
        company: 'WATonomous',
        role: 'Core Team Member',
        logo: WatonomousLogo,
        thumbnail: WatonomousLogoThumbnail,
        interval: 'Jan 2019 - April 2019',
        description: [
            'Developed <span class="experience-strong">Python</span> code in <span class="experience-strong">ROS</span> for car\'s lock and turn signals, and inertial navigation system driver',
            'Enhanced low-speed <span class="experience-strong">CAN</span> interfacing system of the car and performed simulation in Virtual CAN Driver',
        ],
    },
    {
        active: false,
        company: 'SJWS Python Club',
        role: 'Co-Founder & Tutor',
        logo: SJWSPythonClubLogo,
        thumbnail: SJWSPythonClubLogoThumbnail,
        interval: 'Feb 2017 - Jan 2018',
        description: [
            'Co-founded Python Programming Club and provided Python programming lessons to students of grades 5-9',
            'Supervised and collaborated on programming projects',
        ],
    },
]

export default data;