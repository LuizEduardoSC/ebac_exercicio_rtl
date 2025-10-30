import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('PostComments', () => {
    test('deve permitir inserir dois comentários', () => {
        render(<PostComments />);

        const inputComentario = screen.getByTestId('input-comentario');
        const botaoEnviar = screen.getByTestId('botao-enviar');

        // Primeiro comentário
        fireEvent.change(inputComentario, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(botaoEnviar);

        // Segundo comentário
        fireEvent.change(inputComentario, { target: { value: 'Segundo comentário' } });
        fireEvent.click(botaoEnviar);

        // Verifica se os dois comentários foram renderizados
        const comentarios = screen.getAllByTestId('comentario-item');
        expect(comentarios.length).toBe(2);
        expect(comentarios[0]).toHaveTextContent('Primeiro comentário');
        expect(comentarios[1]).toHaveTextContent('Segundo comentário');
    });
});