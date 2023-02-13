import { Stack, Box, InputGroup, InputLeftElement, Select, Input } from "@chakra-ui/react"
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
  return (
    <Stack direction="row" marginTop='60px' justify='space-between'>
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<AiOutlineSearch  color='gray' />}
          />
          <Input type='text' placeholder='search for a country...' />
        </InputGroup>
      </Box>
      <Box>
        <Select>
          
        </Select>
      </Box>
    </Stack>
  )
}
