import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Button,
  TextArea,
  MainContainer,
  StaticPart,
  StylingImg,
  ParentContainer,
  EditorSegment,
  StylingIcons,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    bold: false,
    italic: false,
    underline: false,
    input: '',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onChangeBold = () => {
    this.setState(prevState => ({
      bold: !prevState.bold,
    }))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({
      italic: !prevState.italic,
    }))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({
      underline: !prevState.underline,
    }))
  }

  render() {
    const {input, bold, italic, underline} = this.state
    return (
      <ParentContainer>
        <MainContainer>
          <StaticPart>
            <h1>Text Editor</h1>
            <StylingImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </StaticPart>
          <EditorSegment>
            <StylingIcons>
              <li>
                <Button
                  onClick={this.onChangeBold}
                  active={bold}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  onClick={this.onChangeItalic}
                  active={italic}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  active={underline}
                  onClick={this.onChangeUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </StylingIcons>
            <TextArea
              bold={bold}
              italic={italic}
              underline={underline}
              value={input}
              onChange={this.onChangeInput}
              rows="23"
              cols="40"
            />
          </EditorSegment>
        </MainContainer>
      </ParentContainer>
    )
  }
}

export default TextEditor
