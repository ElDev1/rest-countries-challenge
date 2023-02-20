import { useState } from 'react'

import { Box, Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react"
import { Card } from "../../components/card/Card"
import { Header } from "../../components/header/Header"
import { SearchBar } from "../../components/searchBar/SearchBar"

export const Main = ({ data }) => {
  const bgColor = useColorModeValue("f9f9f9", "#2c2c2c") 
  
  const [dataCountries, setDataCountries] = useState(data) 


  const handleSearchData = (text) => {
    console.log(text, 'text dentro de handlesearch')
    if(text === '') {
      setDataCountries(data)
    } else {
      setDataCountries(data.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase())))
    }
  }

  return (
    <Box bgColor={bgColor}>
        <Header />
        <Container maxW="8xl">
            <SearchBar handleSearchData={handleSearchData}/>
            <Grid templateColumns='repeat(4, 1fr)' gap='10' marginTop='60px'>
              {
                dataCountries.map(country => {
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
