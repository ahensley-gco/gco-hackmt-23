import {   Card,
   Image,
   View,
   Heading,
   Flex,
   Badge,
   Text,
   Button,
   useTheme, } from "@aws-amplify/ui-react";


const MediaPost = ({props: {name, image, description, index, timestamp, title}}) => {


    return (
   //      <Card>
   //       <Image alt={props.description} src={props.image} width="30vw" height="30vh"></Image>
   //   {/* <Flex width='10vw' height="10vh" alignItems="center" justifyContent="center"> */}
   //   asdfsdafsadfa
   //      <div>{props.name}</div>
   //      <div>{props.timestamp}</div>
   //      <img src={props.image} alt={props.name} width="30vw" height="30vh"/>
   //      <div>{props.description}</div>
   //   {/* </Flex> */}
   //      </Card>)
   <View
      backgroundColor={'pink'}
      padding={'30px'}
    >
      <Card>
        <Flex direction="row" alignItems="flex-start" maxWidth="1200px">
          <Image
            alt={description}
            src={require(`../images/${index}.jpeg`)}
            minWidth="30vw"
            width="200px"
            height="200px"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
            gap={'10px'}
          >
            <Flex>
              <Badge size="small" variation="info">
                {timestamp}
              </Badge>
              <Badge size="small" variation="success">
                Verified
              </Badge>
            </Flex>

            <Heading level={5}>
              {title}
            </Heading>

            <Text as="span">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </View>)
}

export default MediaPost;