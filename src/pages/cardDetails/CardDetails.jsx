import { useParams, Link } from "react-router-dom"
import { Box, Button } from '@chakra-ui/react'

export const CardDetails = () => {
  
  const { cardId } = useParams()

  return (
    <Box>
      <Link to='/'>
        <Button>Back</Button>
      </Link>
    </Box>
  )
}
