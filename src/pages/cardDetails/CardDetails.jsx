import { useParams, Link } from "react-router-dom"
import { Box, Button, Container, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import { Header } from "../../components/header/Header"
import { BsArrowLeft } from 'react-icons/bs'

export const CardDetails = ({ data }) => {
  
  const { name } = useParams()
  const filterData = data.filter(country => country.name.toLowerCase() === name.toLowerCase())
  const countryData = filterData[0];
  console.log(countryData)
  return (
    <Box>
      <Header />
      <Container maxW='8xl'>
        <Box p='70px 0'>
          <Link to='/'>
            <Button leftIcon={<BsArrowLeft />}>Back</Button>
          </Link>
        </Box>
        <Stack direction="row" justifyContent='space-between'>
          <Box w='650px' h='400px'>
            <Image src={countryData.flag} objectFit='cover' boxSize='100%'/>
          </Box>
          <Box w='600px' h='400px'>
            <Box mt='50px'>
              <Text fontWeight='700' fontSize='2xl'>{countryData.name}</Text>
              <Stack direction='row' justify='space-between' mt='40px'>
                <Stack direction='column' gap='5px'>
                  <Text>
                    <Text as='b'>Native Name: </Text> {countryData.nativeName}
                  </Text>
                  <Text>
                    <Text as='b'>Population: </Text> {countryData.population}
                  </Text>
                  <Text>
                    <Text as='b'>Region: </Text> {countryData.region}
                  </Text>
                  <Text>
                    <Text as='b'>Sub Region: </Text> {countryData.subregion}
                  </Text>
                  <Text>
                    <Text as='b'>Capital: </Text> {countryData.capital}
                  </Text>
                </Stack>
                <Stack direction='column' gap='5px'>
                  <Text>
                    <Text as='b'>Top Level Domain: </Text> {countryData.topLevelDomain}
                  </Text>
                  <Text>
                    <Text as='b'>Currencies: </Text> {countryData.currencies.map(currency => currency.name )}
                  </Text>
                  <Text>
                    <Text as='b'>Languages: </Text> {countryData.languages.map(language => language.name).join(", ")}
                  </Text>
                </Stack>
              </Stack>
              <Stack direction='row' mt='50px'>
                <Text as='b'>Border Countries: </Text>
                <Stack direction='row'>
                  {
                    
                  }
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
