import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Details() {
  return(
    <Container>
      <Header/>
        <main>
          <Content>

            <ButtonText title="Excluir nota" />

            <h1>Introdução ao React</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Mollitia eius ex beatae quos eaque dolorem ipsum! Officia ab deserunt aperiam quas error,
              facere unde ea, blanditiis ad inventore voluptatibus laboriosam.
            </p>

            <Section title="Links Úteis">
              <Links>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="nodejs"/>
            </Section>

            <Button title="Voltar"/>
          </Content>
        </main>

    </Container>
  )
}