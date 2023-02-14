import { Box, Stack, Image, Text } from "@chakra-ui/react"

export const Card = ({ img, title, population, region, capital }) => {
  return (
    <Stack direction='column' h='400px' bgColor='white' shadow='base'>
      <Box w='100%' h='200px'>
        <Image src={img} objectFit='cover' boxSize='100%'/>
      </Box>
      <Box p='25px'>
        <Text fontWeight='600' fontSize='xl' mb='15px'>{title}</Text>
        <Box>
          <Text>
            <Text as='b'>Population:</Text> {population}
          </Text>
          <Text>
            <Text as='b'>Region:</Text> {region}
          </Text>
          <Text>
            <Text as='b'>Capital:</Text> {capital}
          </Text>
        </Box>
      </Box>
    </Stack>
  )
}
