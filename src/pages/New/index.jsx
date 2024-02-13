import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';


import { Container, Form } from './styles';

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder= "Observações"/>

                    <Section title="Links Úteis">
                        <NoteItem value="https://rocketseat.com.br"/>
                        <NoteItem placeholder="Novo Link" isNew/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem placeholder="Nova Tag" isNew/>
                        </div>
                    </Section>

                    <Button title="Salvar">

                    </Button>
                </Form>
            </main>
        </Container>
    )
}