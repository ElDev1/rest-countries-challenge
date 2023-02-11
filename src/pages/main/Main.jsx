import { Box, Container } from "@chakra-ui/react"
import { Card } from "../../components/card/Card"
import { Header } from "../../components/header/Header"
import { SearchBar } from "../../components/searchBar/SearchBar"

export const Main = () => {
  return (
    <Box>
        <Header />
        <Container maxW="8xl">
            <SearchBar />
            <Box>
                <Card />
            </Box>
        </Container>
    </Box>
  )
}
