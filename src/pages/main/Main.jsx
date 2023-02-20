import { useState, useEffect } from 'react'

import { Box, Container, Grid, GridItem, useColorModeValue } from "@chakra-ui/react"
import { Card } from "../../components/card/Card"
import { Header } from "../../components/header/Header"
import { SearchBar } from "../../components/searchBar/SearchBar"

export const Main = ({ data }) => {
  const bgColor = useColorModeValue("f9f9f9", "#2c2c2c") 
  
  const [selectedData, setSelectedData] = useState(data)
  const [dataCountries, setDataCountries] = useState(data) 
  
  useEffect(() => {
    setDataCountries(selectedData)
  }, [selectedData])

  const handleSelectRegion = (region) => {
    switch(region) {
      case 'all':
        setSelectedData(data)
      break;
      case 'africa':
        setSelectedData(data.filter(elem => elem.region === 'Africa'))
      break;
      case 'america':
        setSelectedData(data.filter(elem => elem.region === 'Americas'))
      break;
      case 'asia':
        setSelectedData(data.filter(elem => elem.region === 'Asia'))
      break;
      case 'europe':
        setSelectedData(data.filter(elem => elem.region === 'Europe'))
      break;
      case 'oceania':
        setSelectedData(data.filter(elem => elem.region === 'Oceania'))
      break;
      default:
        setSelectedData(data)
    }
  }

  const handleSearchData = (text) => {
    if(text === '') {
      setDataCountries(selectedData)
    } else {
      setDataCountries(selectedData.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase())))
    }
  }

  return (
    <Box bgColor={bgColor}>
        <Header />
        <Container maxW="8xl">
            <SearchBar handleSearchData={handleSearchData} handleSelectRegion={handleSelectRegion}/>
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
