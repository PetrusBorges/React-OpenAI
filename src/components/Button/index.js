//PropTypes
import PropTypes from 'prop-types'

//styled-components
import { Container } from "./styles"

//components
import Spinner from "../../components/Spinner"

export default function Button({ 
  children, 
  isLoading,
  onClick,}) {
  return (
    <Container
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading && <Spinner size={16} />}
      {!isLoading && children}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}