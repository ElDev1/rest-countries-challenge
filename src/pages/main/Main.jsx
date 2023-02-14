import { Box, Container, Grid, GridItem } from "@chakra-ui/react"
import { Card } from "../../components/card/Card"
import { Header } from "../../components/header/Header"
import { SearchBar } from "../../components/searchBar/SearchBar"
import data from '../../services/data.json'

export const Main = () => {
  return (
    <Box bgColor='#f9f9f9'>
        <Header />
        <Container maxW="8xl">
            <SearchBar />
            <Grid templateColumns='repeat(4, 1fr)' gap='10' marginTop='60px'>
              {
                data.map(country => {
                  return (
                    <GridItem w='100%' bg='tomato'>
                      <Card title={country.name} img={country.flag} population={country.population} region={country.region} capital={country.capital} />
                    </GridItem>
                  )})
              }
            </Grid>
        </Container>
    </Box>
  )
}
