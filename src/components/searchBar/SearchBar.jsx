import { useState } from "react"

import { Stack, Box, InputGroup, InputLeftElement, Select, Input } from "@chakra-ui/react"
import { AiOutlineSearch } from 'react-icons/ai'


export const SearchBar = ({ handleSearchData }) => {
  const [text, setText] = useState('')

  const handleText = (e) => {
    setText(e.currentTarget.value)
    handleSearchData(e.currentTarget.value)
  }

  return (
    <Stack direction="row" marginTop='60px' justify='space-between' backgroundColor='f3f3f3'>
      <Box>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<AiOutlineSearch fontSize='22px' color='gray' />}
          />
          <Input value={text} onChange={handleText} bg='white' size='lg' type='text' color='gray' fontSize='16px' placeholder='search for a country...' />
        </InputGroup>
      </Box>
      <Box>
        <Select bg='white' color='gray' fontSize='16px' size='lg'>
          <option selected value='all'>All regions</option>
          <option value='africa'>Africa</option>
          <option value='america'>America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </Select>
      </Box>
    </Stack>
  )
}
