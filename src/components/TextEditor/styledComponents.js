import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: 0;
`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  background-color: transparent;
  border: 0;
  color: #ffffff;
  outline: none;
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1c22;
  height: 70vh;
  padding: 15px;
  border-radius: 15px;
`
export const StaticPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  height: 65vh;
`
export const StylingImg = styled.img`
  height: 45vh;
  flex-grow: 1;
`
export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const EditorSegment = styled.div`
  background-color: #25262c;
  margin-left: 15px;
  border: 1px solid #334155;
  border-radius: 10px;
  height: 65vh;
`
export const StylingIcons = styled.ul`
  list-style-type: none;
  display: flex;
  border-bottom: 1px solid #334155;
`
