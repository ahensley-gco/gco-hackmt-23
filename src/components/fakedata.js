export const getMedia = () =>
    Promise.resolve(Object.values(media));

export const getDonor = () => Promise.resolve(donor);

const media = [
    {
    name: "Lea",
    image: '../images/firstImage.jpeg',
    title: "Lea receives an education boost from her kindhearted sponsors",
    description: "Lea and her group wanted to give you all a warm hearted thank you for all the support you have given!",
    timestamp: "1/29/23 12:21:23"
    },
    {
        name: "Doc",
        image: '../images/secondImage.jpeg',
        title: "Doc's dream comes true: READING!",
        description: "Doc just got new books from authors like Eric Carle, Beverly Cleary and Roald Dahl! Learning how to read is a step forward to a great future, so thank you.",
        timestamp: "1/25/22 3:01:54"
    },
    {
    name: "Zora",
    image: '../images/thirdImage.jpeg',
    title: "Zora's life will be transformed through the new youth group program",
    description: "A youth program received funding that will give young people, like Zora, the resources they need to turn their lives around. The program focuses on education, job training, and personal development to help young people overcome challenges and achieve their full potential",
    timestamp: "12/25/22 6:20:13"
    },
    {
        name: "Poseidon",
        image: '../images/fourthImage.jpeg',
        title: "Poseidon's dream job comes true! Local bike repair shop worker.",
        description: " Poseidon was able to get his dream job while persuing his education as a worker at the local bike repair shop. Poisidon is overjoyed and grateful for the opportunity to pursue their dreams and make a better life for himself.",
        timestamp: "12/02/22 1:12:03"
    }
]

const donor = {name: "Corey"}