export const getMedia = () =>
    Promise.resolve(Object.values(media));

export const getDonor = () => Promise.resolve(donor);

const media = [
    {
    name: "Lea",
    image: '../images/firstImage.jpeg',
    title: "Disadvantaged Children Receive Education Boost from Kindhearted Sponsor",
    description: "A group of disadvantaged children received support for their education from a generous sponsor, giving them the resources they need to pursue their dreams and build a better future",
    timestamp: "1/29/23 12:21:23"
    },
    {
        name: "Jude",
        image: '../images/secondImage.jpeg',
        title: "Jude's Dream Comes True: Local Sponsorship Brings New Opportunities",
        description: "Jude finally got the support he deserved when a kindhearted sponsor stepped forward to donate funds towards his education and future.",
        timestamp: "1/25/22 3:01:54"
    },
    {
    name: "Lea",
    image: '../images/thirdImage.jpeg',
    title: "Young Lives Transformed by Youth Program Funding",
    description: "A youth program received funding that will give young people the resources they need to turn their lives around. The program focuses on education, job training, and personal development to help young people overcome challenges and achieve their full potential",
    timestamp: "12/25/22 6:20:13"
    },
    {
        name: "Doc",
        image: '../images/fourthImage.jpeg',
        title: "Doc's Dream Comes True: Local Sponsorship Brings New Opportunities",
        description: " Doc finally got the support they deserved when a kindhearted sponsor stepped forward to donate funds towards their education and future. Doc was overjoyed and grateful for the opportunity to pursue their dreams and make a better life for himself.",
        timestamp: "12/02/22 1:12:03"
    }
]

const donor = {name: "Corey"}